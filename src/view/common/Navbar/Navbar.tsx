// import './Navbar.css';
import {Link} from "react-router-dom";
import logo from '../../../assets/image1.png'; // Assuming you have a logo image in this path
export function Navbar() {
    return (
        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-700 to-gray-800 text-white shadow-md">
            <img className="w-20 h-20 cursor-pointer" src={logo} alt="logo" />
            <p className="text-xl font-bold text-white hover:text-green-500">My Website</p>
            <ul className="flex gap-8">
                <li><Link className="text-green-400 hover:text-green-500" to="/">Home</Link></li>
                <li><Link className="text-green-400 hover:text-green-500" to="/about">About</Link></li>
                <li><Link className="text-green-400 hover:text-green-500" to="/contact">Contact</Link></li>
            </ul>
            <button className="ml-4 bg-white text-gray-800 px-4 py-2 rounded hover:bg-green-500 hover:text-black">
                <Link to="/login">Sign In</Link>
            </button>
        </div>
    );
}
export default Navbar;