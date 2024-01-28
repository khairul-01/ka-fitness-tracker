import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import {  useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SocialLogin = () => {
  const { googleSignin } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    googleSignin()
      .then(result => {
        console.log(result.user);
        const userInfo = {
          name: result.user.displayName,
          email: result.user.email,
        }
        axiosPublic.post('/users', userInfo)
          .then(res => {
            if (res.data.insertedId) {
              console.log("Data added to the database successfully");

            }
            Swal.fire({
              title: "Google Logged in successfull",
              showClass: {
                popup: `
                      animate__animated
                      animate__fadeInUp
                      animate__faster
                    `
              },
              hideClass: {
                popup: `
                      animate__animated
                      animate__fadeOutDown
                      animate__faster
                    `
              }
            });
          })

          navigate('/');

      })
      .catch(error => console.error(error));
  }
  return (
    <div className="mb-3">
      <div className="divider divider-primary">Login with</div>
      <button onClick={handleGoogleLogin} className="btn"><FaGoogle /> Google</button>
    </div>
  );
};

export default SocialLogin;