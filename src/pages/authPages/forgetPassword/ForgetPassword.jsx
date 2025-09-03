import React, { useState } from "react";
import { Mail, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email address");
      return;
    }

    setIsLoading(true);

    // Simulate OTP sending process
    setTimeout(() => {
      // alert("OTP sent successfully! (This is a demo)");
      navigate("/auth/verify-email");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className=" w-full flex items-center justify-center py-10 ">
      <div className="w-full bg-white  flex items-center justify-center">
        <div className="w-full  ">
          {/* Back Arrow and Title */}
          <div className="flex items-center justify-center mb-4 relative">
            <Link
              to="/auth/login"
              className="absolute left-0 p-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
            >
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <h1 className="text-2xl font-medium text-gray-800">
              Forgot Password
            </h1>
          </div>

          {/* Description */}
          <p className="text-center text-gray-600 mb-4 leading-relaxed">
            Please enter your email address to reset your password.
          </p>

          {/* Form */}
          <div className="space-y-4">
            {/* Email Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-Mail"
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300"
                required
              />
            </div>

            {/* Send OTP Button */}
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full py-4 bg-black text-white rounded-full font-semibold text-lg hover:bg-gray-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Sending OTP..." : "Send OTP"}
            </button>

            {/* Sign In Link */}
            {/* <p className="text-center text-gray-600 mt-6">
              
              <button
                onClick={handleBackToLogin}
                className="text-black font-semibold hover:text-gray-700 transition-colors duration-200"
              >
                Sign In
              </button>
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
