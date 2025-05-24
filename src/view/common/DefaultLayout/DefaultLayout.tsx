import MainContent from "../MainContent/MainContent.tsx";
import Footer from "../Footer/Footer.tsx";
import Navbar from "../Navbar/Navbar.tsx";

export function DefaultLayout() {
    return (
        <>
            <Navbar/>
            <MainContent/>
            <Footer/>
        </>
    );
}