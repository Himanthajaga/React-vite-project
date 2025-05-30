// import './MainContent.css'
import {Route, Routes} from "react-router-dom";
import {Home} from "../../pages/Home/Home.tsx";
import {About} from "../../pages/About/About.tsx";
import  * as React from "react";
import {Contact} from "../../pages/Contact/Contact.tsx";
export function MainContent() {
    return (
        <div className="bg-gray-200 p-4">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                {/*<Route path="/login" element={<Login />} />*/}
            </Routes>
        </div>
    );
}

export default MainContent;