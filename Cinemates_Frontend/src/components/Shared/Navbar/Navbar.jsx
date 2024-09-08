import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { BsCameraReelsFill, BsSearch, BsList } from "react-icons/bs";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    return (
        <div className="bg-base-100">
            <div className="flex justify-between items-center max-w-screen-2xl m-auto py-2">
                {/* Logo */}
                <div className="flex items-center">
                    <p className="text-xl font-semibold flex items-center">
                        <BsCameraReelsFill className="mr-2" />
                        <span className="text-[#FF5757]">Cine</span>Mates
                    </p>
                </div>

                {/* Search Bar */}
                <div className="relative form-control">
                    <input
                        type="text"
                        placeholder="Search"
                        className="input input-md w-[578px] pl-12 shadow-md rounded-full"
                    />
                    <BsSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
                    <BsList className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
                </div>

                {/* Navigation Links */}
                <div>
                    <div className="flex space-x-10">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `text-lg ${isActive ? "border-b-2 border-red-500" : "text-gray-700"}`
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/movies"
                            className={({ isActive }) =>
                                `text-lg ${isActive ? "border-b-2 border-red-500" : "text-gray-700"}`
                            }
                        >
                            Movies
                        </NavLink>
                        <NavLink
                            to="/feed"
                            className={({ isActive }) =>
                                `text-lg ${isActive ? "border-b-2 border-red-500" : "text-gray-700"}`
                            }
                        >
                            Feed
                        </NavLink>
                        <NavLink
                            to="/watchlist"
                            className={({ isActive }) =>
                                `text-lg ${isActive ? "border-b-2 border-red-500" : "text-gray-700"}`
                            }
                        >
                            Watchlist
                        </NavLink>
                    </div>
                </div>

                {/* User Authentication Links */}
                <div>
                    {user ? (
                        <div className="flex items-center space-x-4">
                            <span className="text-gray-700">{user.email}</span>
                            <button onClick={handleLogout} className="btn btn-error btn-sm text-black">
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div>
                            <NavLink to="/signin" className="btn btn-error btn-sm text-black">
                                Sign in
                            </NavLink>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
