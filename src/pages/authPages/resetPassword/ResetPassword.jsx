import { useState } from "react";
import { ArrowLeft, Lock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleConfirm = () => {
    // Handle password reset logic here
    // console.log("Password reset confirmed");
    navigate("/auth/login");
  };

  return (
    <div className="w-full py-5">
      <div>
        {/* Back Arrow and Title */}
        <div className="flex items-center justify-center mb-4 relative">
          <Link
            to="/auth/verify-email"
            // onClick={handleBackToLogin}
            className="absolute left-0 p-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
          >
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-2xl font-medium text-gray-800">Reset Password</h1>
        </div>

        {/* Subtitle */}
        <p className="text-sm text-gray-600 mb-8 text-center">
          Your password must be 8-10 character long.
        </p>

        {/* Password Inputs */}
        <div className="space-y-4 mb-8">
          {/* Enter Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
            />
          </div>

          {/* Re-enter Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="password"
              placeholder="Re-enter Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
            />
          </div>
        </div>

        {/* Confirm Button */}
        <button
          onClick={handleConfirm}
          className="w-full bg-black text-white py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
