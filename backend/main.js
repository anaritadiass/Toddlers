const express = require("express")
    const app = express()
    const port = process.env.PORT ?? 3001
    
app.use(express.json())

app.post("/signup", async (req, res) => {
    console.log(req.body)
    const errors = await validateNewUser(req.body)

    if (Object.keys(errors).length === 0) {
        // Criar utilizador
        const { passwordConfirmation, ...user } = req.body
        const id = await insertUser(user)
        res.status(201).json({
            "message": "Utilizador Criado com Sucesso!",
            "_id": id
        })
        return
    }
    res.status(400).json({
        message: "Os dados introduzidos não são válidos.",
        errors
    })
})

app.post("/login", async (req, res) => {
    const { email, password } = req.body

    const user = await findUserByEmail(email)
    if (!user)
        return res
            .status(404)
            .json({ "message": "O utilizador não foi encontrado!" })

    if (user.password !== password)
        return res
            .status(401)
            .json({ "message": "A password introduzida é inválida!" })

    const token = await insertSession({ email })
    res.status(200).json({ token })
})

app.use("/user", async (req, res, next) => {
    const token = req.header("authorization")
    if (token === undefined)
        return res
            .status(401)
            .json({ message: "Não foi enviado o token de autenticação!" })

    const session = await findSessionByToken(token)
    if (!session)
        return res
            .status(403)
            .json({ message: "Não existe nenhuma sessão com o token indicado!" })

    const user = await findUserByEmail(session.email)
    delete user.password

    req.user = user
    next()
})

app.get("/user", async (req, res) => {
    res
        .status(200)
        .json(req.user)
})

app.get("/user/:id", async (req, res) => {
    res
        .status(200)
        .json({
            sameUser: String(req.user._id) === req.params.id
        })
})

app.listen(port, () => console.log(`À escuta em http://localhost:${port}`))

async function validateNewUser(data) {
    const errors = {}
    if (data.email === undefined || data.email.length === 0) {
        errors.email = "Por favor introduza o seu endereço de email."
    } else if (!validateEmail(data.email)) {
        errors.email = "Por favor introduza um endereço de email válido."
    } else if (Boolean(await findUserByEmail(data.email))) {
        errors.email = "O endereço introduzido já está registado."
    }

    if (data.password === undefined) {
        errors.password = "Por favor introduza a sua password."
    } else {
        const passwordStrength = checkPasswordStrength(data.password)
        if (data.password.length === 0) {
            errors.password = "Por favor introduza a sua password."
        } else if (passwordStrength === 0) {
            errors.password = "A sua password deve ter no mínimo 8 caracteres."
        } else if (passwordStrength < 4) {
            errors.password = "A sua password deve ter pelo menos um número, uma mínuscula, uma maiúscula e um símbolo."
        }
    }

    if (data.passwordConfirmation === undefined || data.passwordConfirmation.length === 0) {
        errors.passwordConfirmation = "Por favor introduza novamente a sua password."
    } else if (data.password !== data.passwordConfirmation) {
        errors.passwordConfirmation = "As passwords não coincidem."
    }

    if (!data.acceptsTerms) {
        errors.acceptsTerms = "Tem de aceitar os termos e condições para criar a sua conta."
    }

    return errors
}


function validateEmail(email) {
    // Esta expressão regular não garante que email existe, nem que é válido
    // No entanto deverá funcionar para a maior parte dos emails que seja necessário validar.
    const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return EMAIL_REGEX.test(email)
}

function checkPasswordStrength(password) {
    if (password.length < 8) return 0;
    const regexes = [
        /[a-z]/,
        /[A-Z]/,
        /[0-9]/,
        /[~!@#$%^&*)(+=._-]/
    ]
    return regexes
        .map(re => re.test(password))
        .reduce((score, t) => t ? score + 1 : score, 0)
}

    app.listen(port, () => console.log(`À escuta em http://localhost:${port}`))