
import './SignUp.css'



const SingupScreen = () => {


    return (
        <div className="total">
            <div className="navbar">
                <a href="/LandingPage.js" className="img">
                    <img src="/toddlersLogo.svg" width="300px" alt="Toddlers logo" />
                </a>
            </div>

            <div className="centro">

                <p className="title">Sign Up</p>

                <form>
                    <div className="Name">
                        <label className="SName">Email</label>
                        <input //AQUI TEM DE SER NAMEINPUT  ???
                            className="nomeInput"
                            label="Please introduce you name"
                            name="name"
                        />
                        <div className="Email">
                            <label className="SEmail">Email</label>
                            <input //AQUI TEM DE SER NAMEINPUT  ???
                                className="emailInput"
                                label="Please enter your email"
                                name="email"
                            />
                        </div>
                        <div className="Pass">
                            <label className="SPass">Password</label>
                            <input //AQUI TEM DE SER NAMEINPUT ???
                                type="password"
                                className="passInput"
                                label="Please enter your password"
                                name="password"
                            />
                        </div>
                        <div className="ConfirmPass">
                            <label className="SPass">Confirm your Password</label>
                            <input //AQUI TEM DE SER NAMEINPUT ???
                                type="password"
                                className="passInput"
                                label="Please renter your password"
                                name="password"
                            />
                            <div className="Code">
                                <label className="SCode">Toodlers Code</label>
                                <input //AQUI TEM DE SER NAMEINPUT ???
                                    type="code"
                                    className="codeInput"
                                    label="Please enter your Toodlers Code"
                                    name="code"
                                />
                                <div className="address">
                                    <label className="SAddress">Toodlers Code</label>
                                    <input //AQUI TEM DE SER NAMEINPUT ???
                                        type="address"
                                        className="addressInput"
                                        label="Please enter your address"
                                        name="address"
                                    />
                                </div>
                                <div className="btn">
                                    <button className="button-19" type="submit">Submit</button>
                                </div>
                            </form>
                            
                        </div>
                        <div>
                            <div className="footer">
                                <div className="fim">
                                    <div className="footerlogo"></div>
                                    <h2 class="legal">Legal</h2>
                                    <ul>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Terms of Use</a></li>
                                        <li>About Us</li>
                                    </ul>
                                    <div className="footerbtn">
                                        <a href="mailto:toodlers@toodlers.com">Contact Us</a>
                                    </div>
                                    <p>&copy; 2022 Toddlers. All rights reserved.</p>
                                    <p>A Bytes4Future project. Developed by Ana Rita Dias, Ângela Lopes and Leonardo Dantas.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    );
}
                    export default SingupScreen;