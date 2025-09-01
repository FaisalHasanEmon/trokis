import { ChevronRight, Lock, Eye, EyeOff, ArrowLeft } from "lucide-react";
import { useState } from "react";
import PasswordInputField from "../../../components/settingsInputFields/PasswordInputField";

const SettingsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const pages = [
    {
      path: "/settings/personal-information",
      label: "Personal Information",
    },
    {
      label: "Change Password",
    },
    {
      path: "/settings/terms-and-conditions",
      label: "Terms & Condition",
    },
    {
      path: "/settings/privacy-policy",
      label: "Privacy Policy",
    },
    {
      path: "/settings/trust-and-safety",
      label: "Trust & Safety",
    },
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate password match
    if (formData.newPassword !== formData.confirmPassword) {
      alert("New passwords don't match!");
      return;
    }

    // Validate password length
    if (formData.newPassword.length < 8 || formData.newPassword.length > 10) {
      alert("Password must be 8-10 characters long!");
      return;
    }

    // Add your password update logic here
    console.log("Password update submitted:", formData);
    alert("Password updated successfully!");

    // Close modal and reset form
    closeModal();
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
    // setShowOldPassword(false);
    // setShowNewPassword(false);
    // setShowConfirmPassword(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="bg-gray-100 mt-9">
      <div className="w-full bg-white shadow-md rounded-lg py-[125px] px-5 sm:px-[50px] lg:px-[100px]">
        {pages.map((item, index) => {
          if (item?.label.toLowerCase().includes("password")) {
            return (
              <button
                key={index}
                onClick={() => setIsModalOpen(true)}
                className="flex justify-between items-center w-full text-left px-4 py-3 mb-3 border border-gray-300 bg-gray-100 rounded-md hover:bg-gray-200 transition"
              >
                <span className="text-[#545454] font-medium">{item.label}</span>
                <ChevronRight className="h-5 w-5 text-[#545454]" />
              </button>
            );
          } else {
            return (
              <a key={index} href={item?.path}>
                <button className="flex justify-between items-center w-full text-left px-4 py-3 mb-3 border border-gray-300 bg-gray-100 rounded-md hover:bg-gray-200 transition">
                  <span className="text-[#545454] font-medium">
                    {item.label}
                  </span>
                  <ChevronRight className="h-5 w-5 text-[#545454]" />
                </button>
              </a>
            );
          }
        })}
      </div>

      {/* Password Change Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/30 bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={handleOverlayClick}
        >
          <div className="bg-white rounded-lg w-full max-w-md mx-auto relative">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <button
                  onClick={closeModal}
                  className="p-1 hover:bg-gray-100 rounded-full transition"
                >
                  <ArrowLeft className="h-5 w-5 text-gray-600" />
                </button>
                <h2 className="text-lg font-medium text-gray-900">
                  Change Password
                </h2>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <p className="text-sm text-gray-600 mb-6">
                Your password must be 8-10 character long.
              </p>

              <div className="space-y-4">
                {/* Old Password */}
                <PasswordInputField
                  value={formData.oldPassword}
                  onChange={(val) => handleInputChange("oldPassword", val)}
                  showLabel={true}
                  label="Old Password"
                  placeHolder="Enter old password"
                />
                {/* Old Password */}
                <PasswordInputField
                  value={formData.newPassword}
                  onChange={(val) => handleInputChange("newPassword", val)}
                  showLabel={true}
                  label="New Password"
                  placeHolder="Enter old password"
                />
                {/* Old Password */}
                <PasswordInputField
                  value={formData.confirmPassword}
                  onChange={(val) => handleInputChange("confirmPassword", val)}
                  showLabel={true}
                  label="Re-enter Password"
                  placeHolder="Enter old password"
                />
                {/* Forgot Password Link */}
                <div className="text-left">
                  <button
                    type="button"
                    className="text-sm text-black "
                    onClick={() =>
                      alert("Forgot password functionality would go here")
                    }
                  >
                    Forget Password?
                  </button>
                </div>

                {/* Update Password Button */}
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full bg-black text-white py-3 rounded-md font-medium hover:bg-gray-800 transition mt-6"
                  disabled={
                    !formData.oldPassword ||
                    !formData.newPassword ||
                    !formData.confirmPassword
                  }
                >
                  Update password
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsPage;
