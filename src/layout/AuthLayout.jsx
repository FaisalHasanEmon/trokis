import { Outlet, useLocation } from "react-router-dom";

const AuthLayout = () => {
  const location = useLocation();

  return (
    <section className="font-montserrat bg-[#F2F5F7] flex flex-col lg:flex-row h-screen w-full">
      {/* Left Side Image (Only for lg and above) */}
      <div className="hidden lg:flex bg-[#FFF9F9] h-screen lg:w-1/2 justify-center items-center">
        {location.pathname === "/auth/login" && (
          <figure className="max-w-xl">
            <img
              src="/AuthImages/Login.png"
              alt="Login Image"
              className="max-w-full h-auto"
            />
          </figure>
        )}
      </div>

      {/* Right Side Content */}
      <div className="flex justify-center items-center w-full lg:w-1/2 h-screen px-4">
        <div className="w-full max-w-md rounded-xl bg-white shadow p-5 md:p-6">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;
