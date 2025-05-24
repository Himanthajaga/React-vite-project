import './Footer.css'
import {Link} from "react-router-dom";
import logo from "../../../assets/image1.png";
export function Footer() {
    return (
        <footer className="footer">
            <img className="imgnav" src={logo} alt="logo"/>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="footer-copyright">
                &copy; {new Date().getFullYear()} Your Company. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;