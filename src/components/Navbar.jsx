import { Link } from "react-router-dom";
import usericon from "../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    return (
        <div className="flex justify-between items-center">
            <div className="">{user && user.email}</div>
            <div className="space-x-5">
                <Link to="/">Home</Link>
                <Link to="/career">Career</Link>
                <Link to="/about">About</Link>
            </div>
            <div className="flex gap-2 items-center">
                <div className="">
                    {user && user?.email ? (
                        <div className="flex flex-col items-center gap-2 p-4">
                            <img className="w-10 h-10 rounded-full" src={user?.photoURL} alt="" />
                            <p>{user.displayName}</p>
                        </div>
                    ) : (
                        <img src={usericon} alt="" />
                    )}
                </div>

                {user && user?.email ? (
                    <button onClick={logOut} className="btn btn-neutral rounded-none px-10">
                        Log-Out
                    </button>
                ) : (
                    <Link to="/auth/login" className="btn btn-neutral rounded-none px-10">
                        Login
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;