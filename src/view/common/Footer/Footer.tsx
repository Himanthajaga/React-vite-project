// import './Footer.css'
import {Link} from "react-router-dom";
import logo from "../../../assets/keels.jpg";
export function Footer() {
    return (
        <div
            className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-500 to-green-400 text-white shadow-md">
            <img className="w-20 h-20 cursor-pointer" src={logo} alt="logo"/>
            <p className="text-xl font-bold text-white hover:text-black">Keels super</p>
            <ul className="flex gap-8">
                <li><Link className="text-white hover:text-black font-bold" to="/">Home</Link></li>
                <li><Link className="text-white hover:text-black font-bold" to="/about">About</Link></li>
                <li><Link className="text-white hover:text-black font-bold" to="/contact">Contact</Link></li>
            </ul>
            <button
                className="bg-gradient-to-r from-blue-500 to-green-400 ml-4 bg-white text-gray-800 px-4 py-2 rounded hover:bg-green-500 hover:text-black">
                <Link to="/login">Sign In</Link>
            </button>
            <div className="text-center text-gray-600 mt-4 flex flex-col items-center">
                <p className="text-xs">© 2025 Keels Super. All rights reserved.</p>
                <p className="text-xs">Privacy Policy | Terms of Service</p>
            </div>
        </div>
    );
}

export default Footer;