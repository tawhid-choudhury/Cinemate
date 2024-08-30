import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../HomepageComponents/Footer/Footer";

const Root = () => {
    return (
        <div className="max-w-screen-2xl m-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default Root;