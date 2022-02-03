const express = require("express")
    const app = express()
    const port = process.env.PORT ?? 3001
    
app.use(express.json())

app.listen(port, () => console.log(`À escuta em http://localhost:${port}`))

app.post("/signup", async (req, res) => {
    console.log(req.body)
    const errors = await validateNewUser(req.body)

    if (Object.keys(errors).length === 0) {
        // Criar utilizador
        const { passwordConfirmation, ...user } = req.body
        const id = await insertUser(user)
        res.status(201).json({
            "message": "User created successfully!",
            "_id": id
        })
        return
    }
    res.status(400).json({
        message: "The inserted data is not valid!",
        errors
    })
})

app.post("/login", async (req, res) => {
    const { email, password } = req.body

    const user = await findUserByEmail(email)
    if (!user)
        return res
            .status(404)
            .json({ "message": "User not found!" })

    if (user.password !== password)
        return res
            .status(401)
            .json({ "message": "The inserted password is not valid!" })

    const token = await insertSession({ email })
    res.status(200).json({ token })
})

app.use("/user", async (req, res, next) => {
    const token = req.header("authorization")
    if (token === undefined)
        return res
            .status(401)
            .json({ message: "Não foi enviado o token de autenticação The authentication token was not found!" })

    const session = await findSessionByToken(token)
    if (!session)
        return res
            .status(403)
            .json({ message: "No session available for the inserted token!" })

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



async function validateNewUser(data) {
    const errors = {}
    if (data.email === undefined || data.email.length === 0) {
        errors.email = "Please insert your email!"
    } else if (!validateEmail(data.email)) {
        errors.email = "Please introduce a valid email!"
    } else if (Boolean(await findUserByEmail(data.email))) {
        errors.email = "The introduced email already in use!"
    }

    if (data.password === undefined) {
        errors.password = "Please insert your password!"
    } else {
        const passwordStrength = checkPasswordStrength(data.password)
        if (data.password.length === 0) {
            errors.password = "Please insert your password!"
        } else if (passwordStrength === 0) {
            errors.password = "Your password must be at least 8 characters"
        } else if (passwordStrength < 4) {
            errors.password = "Your password must have at least 1 upper case, lower case, numeric, and special character!."
        }}}