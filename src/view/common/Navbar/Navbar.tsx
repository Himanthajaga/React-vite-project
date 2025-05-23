import './Navbar.css';

export function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-logo">
                <img src="src/assets/react.svg" alt="Logo" />
            </div>
            <div className="navbar-links">
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