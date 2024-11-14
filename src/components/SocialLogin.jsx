import { FaGoogle } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
const SocialLogin = () => {
    return (
        <div>
            <h2 className="font-semibold mb-3">
                <div className="flex flex-col gap-2">
                    <button className="btn btn-sm">
                        <FaGoogle /> Login with Google
                    </button>
                    <button className="btn btn-sm">
                        <FaGithub />
                        Login with Github
                    </button>
                </div>
            </h2>
        </div>
    );
};

export default SocialLogin;
