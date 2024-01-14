import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div className="mb-3">
            <div className="divider divider-primary">Login with</div>
            <button className="btn"><FaGoogle /> Google</button>
        </div>
    );
};

export default SocialLogin;