import { Mail } from "lucide-react";

const EmailInputField = ({
  value,
  onChange,
  showLabel = false,
  label = "",
  placeHolder,
}) => {
  return (
    <>
      <div>
        {/* Label with conditional rendering */}
        {showLabel && (
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {label}
          </label>
        )}
        {/*Password Input Field  */}
        <div className="relative">
          {/* Lock Icon */}
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <Mail className="h-4 w-4 text-gray-400" />
          </div>
          {/* Input Field */}
          <input
            type="email"
            placeholder={placeHolder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
    </>
  );
};

export default EmailInputField;
