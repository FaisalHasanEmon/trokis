import { ChevronRight } from "lucide-react";
import { useState } from "react";
import SettingsPassChangeModals from "../../../components/settingsPageComponents/SettingsPassChangeModals";

const SettingsPage = () => {
  /** ------------------------------
   * STATE MANAGEMENT
   * ----------------------------- */
  const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] =
    useState(false);
  const [isForgetPasswordModalOpen, setIsForgetPasswordModalOpen] =
    useState(false);
  const [isEmailVerificationModalOpen, setIsEmailVerificationModalOpen] =
    useState(false);
  const [isResetPasswordModalOpen, setIsResetPasswordModalOpen] =
    useState(false);

  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
    email: "",
    otp: ["", "", "", "", "", ""],
    resetPassword: "",
    confirmResetPassword: "",
  });

  /** ------------------------------
   * SETTINGS PAGE NAVIGATION ITEMS
   * ----------------------------- */
  const pages = [
    { path: "/settings/personal-information", label: "Personal Information" },
    { label: "Change Password" },
    { path: "/settings/terms-and-conditions", label: "Terms & Condition" },
    { path: "/settings/privacy-policy", label: "Privacy & Policy" },
    { path: "/settings/trust-and-safety", label: "Trust & Safety" },
  ];

  /** ------------------------------
   * HANDLE INPUT CHANGES
   * ----------------------------- */
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  /** ------------------------------
   * CHANGE PASSWORD FLOW
   * ----------------------------- */
  const handleChangePassword = (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      alert("New passwords don't match!");
      return;
    }
    if (formData.newPassword.length < 8 || formData.newPassword.length > 10) {
      alert("Password must be 8-10 characters long!");
      return;
    }
    closeChangePasswordModal();
    setIsEmailVerificationModalOpen(true);
  };

  /** ------------------------------
   * FORGET PASSWORD FLOW
   * ----------------------------- */
  const handleForgetPassword = () => {
    setIsForgetPasswordModalOpen(true);
    setIsChangePasswordModalOpen(false);
  };

  const handleSendOtp = () => {
    setIsForgetPasswordModalOpen(false);
    setIsEmailVerificationModalOpen(true);
    handleForgetPassword();
  };

  /** ------------------------------
   * OTP VERIFICATION FLOW
   * ----------------------------- */
  const handleVerifyOtp = () => {
    const otpValue = formData.otp.join("");
    if (otpValue.length !== 6) {
      alert("Please enter a valid 6-digit OTP.");
      return;
    }
    setIsEmailVerificationModalOpen(false);
    setIsResetPasswordModalOpen(true);
  };

  /** ------------------------------
   * RESET PASSWORD FLOW
   * ----------------------------- */
  const handleResetPassword = () => {
    if (formData.resetPassword !== formData.confirmResetPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (
      formData.resetPassword.length < 8 ||
      formData.resetPassword.length > 10
    ) {
      alert("Password must be 8-10 characters long!");
      return;
    }
    alert("Password has been reset successfully!");
    closeResetPasswordModal();
  };

  /** ------------------------------
   * CLOSE MODALS
   * ----------------------------- */
  const closeChangePasswordModal = () => {
    setIsChangePasswordModalOpen(false);
    setFormData((prev) => ({
      ...prev,
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    }));
  };

  const closeForgetPasswordModal = () => {
    setIsForgetPasswordModalOpen(false);
    setIsChangePasswordModalOpen(true);
    setFormData((prev) => ({ ...prev, email: "" }));
  };

  const closeVerifyEmailModal = () => {
    setIsEmailVerificationModalOpen(false);
    setFormData((prev) => ({ ...prev, otp: ["", "", "", "", "", ""] }));
  };

  const closeResetPasswordModal = () => {
    setIsResetPasswordModalOpen(false);
    setFormData((prev) => ({
      ...prev,
      resetPassword: "",
      confirmResetPassword: "",
    }));
  };

  /** ------------------------------
   * RENDER COMPONENT
   * ----------------------------- */
  return (
    <div className="bg-gray-100 mt-9">
      {/* SETTINGS BUTTONS */}
      <div className="w-full bg-white shadow-sm rounded-lg py-[125px] px-5 sm:px-[50px] lg:px-[100px]">
        {pages.map((item, index) =>
          item?.label.toLowerCase().includes("password") ? (
            <button
              key={index}
              onClick={() => setIsChangePasswordModalOpen(true)}
              className="flex justify-between items-center w-full text-left px-4 py-3 mb-3 border border-gray-300 bg-gray-100 rounded-md hover:bg-gray-200 transition"
            >
              <span className="text-[#545454] font-medium">{item.label}</span>
              <ChevronRight className="h-5 w-5 text-[#545454]" />
            </button>
          ) : (
            <a key={index} href={item?.path}>
              <button className="flex justify-between items-center w-full text-left px-4 py-3 mb-3 border border-gray-300 bg-gray-100 rounded-md hover:bg-gray-200 transition">
                <span className="text-[#545454] font-medium">{item.label}</span>
                <ChevronRight className="h-5 w-5 text-[#545454]" />
              </button>
            </a>
          )
        )}
      </div>

      {/* Password-related Modals */}
      <SettingsPassChangeModals
        isChangePasswordModalOpen={isChangePasswordModalOpen}
        isForgetPasswordModalOpen={isForgetPasswordModalOpen}
        isEmailVerificationModalOpen={isEmailVerificationModalOpen}
        isResetPasswordModalOpen={isResetPasswordModalOpen}
        formData={formData}
        handleInputChange={handleInputChange}
        setFormData={setFormData}
        handleChangePassword={handleChangePassword}
        handleForgetPassword={handleForgetPassword}
        handleSendOtp={handleSendOtp}
        handleVerifyOtp={handleVerifyOtp}
        handleResetPassword={handleResetPassword}
        closeChangePasswordModal={closeChangePasswordModal}
        closeForgetPasswordModal={closeForgetPasswordModal}
        closeVerifyEmailModal={closeVerifyEmailModal}
        closeResetPasswordModal={closeResetPasswordModal}
      />
    </div>
  );
};

export default SettingsPage;
