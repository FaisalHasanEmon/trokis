import { Outlet, useLocation } from "react-router-dom";

const AuthLayout = () => {
  const location = useLocation();

  return (
    <section className="font-montserrat bg-[#F2F5F7] flex flex-col lg:flex-row h-screen w-full">
      {/* Left Side Image (Only for large and above) */}
      <div
        className={`hidden overflow-clip lg:flex ${
          location.pathname === "/auth/login" ? "bg-[#FFF9F9]" : ""
        }  h-screen lg:w-1/2 justify-center items-center`}
      >
        {/* Login Page Image  */}
        {location.pathname === "/auth/login" && (
          <figure className="max-w-2xl">
            <img
              src="/AuthImages/Login.png"
              alt="Login Image"
              className="max-w-full h-auto"
            />
          </figure>
        )}
        {/* Forget Page Image */}
        {location.pathname === "/auth/forget-password" && (
          <figure className="max-w-2xl">
            <img
              src="/AuthImages/ForgetPassword.png"
              alt="Forget Password Image"
              className="max-w-full h-auto"
            />
          </figure>
        )}
        {/* Verify Email Page Image */}
        {location.pathname === "/auth/verify-email" && (
          <figure className="max-w-2xl">
            <img
              src="/AuthImages/verified.png"
              alt="Verify Email Image"
              className="max-w-full h-auto"
            />
          </figure>
        )}
        {/* Reset Password Page Image */}
        {location.pathname === "/auth/reset-password" && (
          <figure className="max-w-2xl">
            <img
              src="/AuthImages/resetPassword.png"
              alt="Reset Password Image"
              className="max-w-full h-auto"
            />
          </figure>
        )}
      </div>

      {/* Right Side Content */}
      <div className="flex justify-center items-center w-full lg:w-1/2 h-screen px-4">
        <div className="w-full max-w-md rounded-xl bg-white shadow-2xl p-5 md:p-6">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;
