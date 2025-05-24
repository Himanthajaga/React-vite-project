import './Navbar.css';
import {Link} from "react-router-dom";
import logo from '../../../assets/image1.png'; // Assuming you have a logo image in this path
export function Navbar() {
    return (
            <div className="navbar">
                <img className="imgnav" src={logo} alt="logo"/>
                <p className="nav-title">My Website</p>
                <ul>
               <li><Link to = "/">Home</Link></li>
                <li><Link to = "/about">About</Link></li>
                <li><Link to = "/contact">Contact</Link></li>
                </ul>
                <button className="button">
                   <Link to="/login"> Sign In</Link>
                </button>
            </div>
    );
}
export default Navbar;