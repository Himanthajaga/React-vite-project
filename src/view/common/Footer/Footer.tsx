import './Footer.css'
export function Footer() {
    return (
        <div className={"footer"}>
            <div className="footer-links">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#contact">Contact</a>
                <a href={"#login"} className="login-button">Login</a>
                <a href={"#register"} className="register-button">Register</a>

            </div>
        </div>
    );
}

export default Footer;