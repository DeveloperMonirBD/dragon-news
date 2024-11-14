import { Link } from "react-router-dom";
import usericon from "../assets/user.png"

const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
            <div className=""></div>
            <div className="space-x-5">
                <Link to="/">Home</Link>
                <Link to="/career">Career</Link>
                <Link to="/about">About</Link>
            </div>
            <div className="flex gap-2 items-center">
                <div className="">
                    <img src={usericon} alt="" />
                </div>
                <button className="btn btn-neutral rounded-none px-10">Login</button>
            </div>
        </div>
    );
};

export default Navbar;