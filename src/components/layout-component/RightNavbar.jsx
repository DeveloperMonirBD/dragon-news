import FindUs from "../FindUs";
import SocialLogin from "../SocialLogin";

const RightNavbar = () => {
    return (
        <div>
            <h2 className="font-semibold mb-6">Login with</h2>
            <div className="space-y-5">
                <SocialLogin />
                <FindUs />
            </div>
        </div>
    );
};

export default RightNavbar;