import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const navigate = useNavigate();
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    let newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Auto focus next input
    if (element.nextSibling && element.value) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(`Entered OTP: ${otp.join("")}`);
    navigate("/auth/reset-password");
  };

  return (
    <div className="w-full text-center py-5">
      {/* Back Arrow and Title */}
      <div className="flex items-center justify-center mb-4 relative">
        <Link
          to="/auth/forget-password"
          className="absolute left-0 p-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
        >
          <ArrowLeft className="h-6 w-6" />
        </Link>
        <h1 className="text-2xl font-medium text-gray-800">Verify Email</h1>
      </div>
      <p className="text-gray-600 mb-6">
        Please enter the otp we have sent you in your email.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="flex justify-center gap-3 mb-6">
          {otp.map((data, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={data}
              onChange={(e) => handleChange(e.target, index)}
              className="w-12 h-12 border border-gray-300 rounded-full text-center text-lg font-semibold focus:outline-none focus:border-black"
            />
          ))}
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-full text-lg font-medium hover:bg-gray-900 transition"
        >
          Verify
        </button>
      </form>
    </div>
  );
};

export default VerifyEmail;
