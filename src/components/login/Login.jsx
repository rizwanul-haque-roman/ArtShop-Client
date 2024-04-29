import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useContext, useState } from "react";
import { AuthContext } from "../auth/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const [viewPass, setVewPass] = useState(true);
  const { loginUser, googleLogIn, gitHubLogIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const pass = form.pass.value;

    console.log(email, pass);

    loginUser(email, pass)
      .then((result) => {
        console.log(result);
        Swal.fire("Login Successful");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => Swal.fire(error.message));
  };

  const loginWithGoogle = () => {
    googleLogIn()
      .then((result) => {
        console.log(result);
        Swal.fire("Login Successful");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => Swal.fire(error.message));
  };

  const loginWithGitHub = () => {
    gitHubLogIn()
      .then((result) => {
        console.log(result);
        Swal.fire("Login Successful");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => Swal.fire(error.message));
  };

  return (
    <div className="w-11/12 bg-login lg:container mx-auto min-h-[80vh] bg-cover bg-center bg-no-repeat rounded-2xl my-6 flex items-center font-zilla">
      <div className="w-auto mx-auto">
        <form
          onSubmit={handleSubmit}
          className="h-[65vh] w-11/12 mx-auto md:w-[70vw] lg:w-[25vw] flex flex-col justify-center gap-4 p-6 border border-[#13131321] shadow-2xl bg-[#13131321] backdrop-blur-sm rounded-xl"
        >
          <h1 className="font-bold text-black text-5xl text-center">
            Login Now!
          </h1>
          <label className="input flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="email" name="email" placeholder="Email" required />
          </label>
          <label className="input flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type={viewPass ? "password" : "text"}
                name="pass"
                placeholder="password"
                required
              />
            </div>
            <a onClick={() => setVewPass(!viewPass)}>
              {viewPass ? <FaRegEye /> : <FaRegEyeSlash />}
            </a>
          </label>
          <a href="#" className="text-black font-medium hover:underline">
            Forgot Password?
          </a>
          <button className="btn bg-plt-four hover:text-plt-five border-0 text-2xl text-white">
            Login
          </button>
          <p className="text-black text-center font-medium">
            Not registered yet? Proceed to{" "}
            <Link state={location.state} className="underline" to={"/register"}>
              Register
            </Link>
          </p>
          <div>
            <div className="flex justify-center">
              <p className="text-wh font-medium">Or Sign in with</p>
            </div>
            <div className="flex gap-6 text-2xl justify-center mt-7">
              <div className="bg-white text-black px-3 py-2 rounded-full">
                <Link
                  onClick={loginWithGoogle}
                  className="flex gap-2 items-center"
                >
                  <FcGoogle /> <p className="text-base">Google</p>
                </Link>
              </div>
              <div className="bg-white text-black px-3 py-2 rounded-full">
                <Link
                  onClick={loginWithGitHub}
                  className="flex gap-2 items-center"
                >
                  <FaGithub /> <p className="text-base">GitHub</p>
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
