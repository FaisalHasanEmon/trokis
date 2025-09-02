import { useEffect, useRef } from "react";

const OTPInputField = ({
  value, // Array of digits
  onChange, // Callback to update OTP array
  length = 6, // Default OTP length
  autoFocus = true, // Whether to focus first input
}) => {
  const inputRefs = useRef([]);

  // Focus first input when mounted
  useEffect(() => {
    if (autoFocus && inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, [autoFocus]);

  // Handle input change
  const handleChange = (index, val) => {
    if (!/^[0-9]?$/.test(val)) return; // Allow only digits

    const newOtp = [...value];
    newOtp[index] = val;
    onChange(newOtp);

    // Move to next input if value entered
    if (val && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  // Handle backspace
  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !value[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="flex justify-between mb-4">
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          type="text"
          maxLength="1"
          value={value[index] || ""}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          ref={(el) => (inputRefs.current[index] = el)}
          className="w-10 h-12 border border-gray-300 bg-[#FAFAFA] rounded text-center text-lg focus:ring-2 focus:ring-black"
        />
      ))}
    </div>
  );
};

export default OTPInputField;
