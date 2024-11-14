import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h2 className="font-semibold mb-3">Find Us On</h2>
            <div className="join flex join-vertical *:bg-base-100">
                <button className="btn join-item justify-start">
                    <span className="text-white bg-blue-700 p-1 rounded-full">
                        <FaFacebook />
                    </span>
                    Facebook
                </button>
                <button className="btn join-item justify-start">
                    <span className="text-white bg-blue-400 rounded-full p-1">
                        <BsTwitter />
                    </span>
                    Twitter
                </button>
                <button className="btn join-item justify-start">
                    <span className="text-white bg-gradient-to-r from-[#405DE6] via-[#5851DB] to-[#833AB4] p-1 rounded-full">
                        <BsInstagram />
                    </span>
                    Instagram
                </button>
            </div>
        </div>
    );
};

export default FindUs;
