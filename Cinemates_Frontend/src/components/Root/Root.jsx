import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Root = () => {
    return (
        <div className="max-w-screen-2xl m-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;