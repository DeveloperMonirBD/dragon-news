import { FaGithub, FaGoogle } from 'react-icons/fa';
const SocialLogin = () => {
    return (
        <div>
            <h2 className="font-semibold mb-3">
                <div className="flex flex-col gap-2">
                    <button className="btn btn-sm bg-base-100">
                        <span className='text-white bg-blue-500 p-1 rounded-full text-xs'>
                            <FaGoogle />
                        </span>
                        Login with Google
                    </button>
                    <button className="btn btn-sm bg-base-100">
                        <span className='bg-gray-100 p-1 rounded-full'>
                            <FaGithub />
                        </span>
                        Login with Github
                    </button>
                </div>
            </h2>
        </div>
    );
};

export default SocialLogin;
