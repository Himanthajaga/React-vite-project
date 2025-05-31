// import './Navbar.css';
import {Link} from "react-router-dom";
import logo from '../../../assets/nav.png'; // Assuming you have a logo image in this path
export function Navbar() {
    return (
        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-500 to-green-400 text-white shadow-md">
            <img className="w-20 h-20 cursor-pointer" src={logo} alt="logo" />
            <p className="text-xl font-bold text-white hover:text-black">My Website</p>
            <ul className="flex gap-8">
                <li><Link className="text-white hover:text-black font-bold" to="/">Home</Link></li>
                <li><Link className="text-white hover:text-black font-bold" to="/about">About</Link></li>
                <li><Link className="text-white hover:text-black font-bold" to="/contact">Contact</Link></li>
            </ul>
            <button className="ml-4 bg-white text-gray-800 px-4 py-2 rounded hover:bg-green-500 hover:text-black transition-colors duration-300 ease-in-out shadow-md border border-gray-300 hover:border-green-500">
                <Link to="/login">Sign In</Link>
            </button>
        </div>
    );
}
export default Navbar;