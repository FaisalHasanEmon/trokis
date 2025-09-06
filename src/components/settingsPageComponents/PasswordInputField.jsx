import { Eye, EyeOff, Lock } from "lucide-react";
import { useState } from "react";

const PasswordInputField = ({
  value,
  onChange,
  showLabel = false,
  label,
  placeHolder,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div>
        {/* Label with conditional rendering */}
        {showLabel && (
          <label className="block text-[16px] font-medium text-black mb-2">
            {label}
          </label>
        )}
        {/*Password Input Field  */}
        <div className="relative">
          {/* Lock Icon */}
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <Lock className="h-4 w-4 text-black" />
          </div>
          {/* Input Field */}
          <input
            type={showPassword ? "text" : "password"}
            placeholder={placeHolder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full pl-10 pr-10 py-3 border border-gray-300 bg-[#FAFAFA]  rounded-md focus:outline-none focus:ring-2 focus:ring-black placeholder:text-black placeholder:text-sm focus:border-transparent"
          />
          {/* Eye Icon Button */}
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black "
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default PasswordInputField;
