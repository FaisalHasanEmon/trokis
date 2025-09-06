import { ArrowLeft } from "lucide-react";
import PasswordInputField from "./PasswordInputField";
import EmailInputField from "./EmailInputField";
import OTPInputField from "./OtpInputField";

const SettingsPassChangeModals = ({
  isChangePasswordModalOpen,
  isForgetPasswordModalOpen,
  isEmailVerificationModalOpen,
  isResetPasswordModalOpen,
  formData,
  handleInputChange,
  setFormData,
  handleChangePassword,
  handleForgetPassword,
  handleSendOtp,
  handleVerifyOtp,
  handleResetPassword,
  closeChangePasswordModal,
  closeForgetPasswordModal,
  closeVerifyEmailModal,
  closeResetPasswordModal,
}) => {
  return (
    <>
      {/* ------------------------------
       * MODAL: CHANGE PASSWORD
       * ----------------------------- */}
      {isChangePasswordModalOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-md mx-auto">
            {/* Header */}
            <div className="flex items-center gap-3 p-4 pb-5 ">
              <button
                onClick={closeChangePasswordModal}
                className="p-1 hover:bg-gray-100 rounded-full"
              >
                <ArrowLeft className="h-5 w-5 text-black" />
              </button>
              <h2 className="text-lg font-medium text-black">
                Change Password
              </h2>
            </div>

            {/* Body */}
            <div className="p-6 pt-0 space-y-5">
              <h2 className="text-sm text-black ">
                Your password must be 8-10 character long.
              </h2>
              <PasswordInputField
                value={formData.oldPassword}
                onChange={(val) => handleInputChange("oldPassword", val)}
                showLabel
                label="Enter old Password"
                placeHolder="Enter old password"
              />
              <PasswordInputField
                value={formData.newPassword}
                onChange={(val) => handleInputChange("newPassword", val)}
                showLabel
                label="Set new password"
                placeHolder="Set new password"
              />
              <PasswordInputField
                value={formData.confirmPassword}
                onChange={(val) => handleInputChange("confirmPassword", val)}
                showLabel
                label="Re-enter new password"
                placeHolder="Re-enter new password"
              />

              {/* Forget Password */}
              <button
                type="button"
                className="text-sm text-black"
                onClick={handleForgetPassword}
              >
                Forget Password?
              </button>

              {/* Submit */}
              <button
                type="button"
                onClick={handleChangePassword}
                className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition mt-6"
              >
                Update password
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ------------------------------
       * MODAL: FORGET PASSWORD
       * ----------------------------- */}
      {isForgetPasswordModalOpen && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-md mx-auto">
            {/* Header */}
            <div className="flex items-center gap-3 p-4 pb-5 ">
              <button
                onClick={closeForgetPasswordModal}
                className="p-1 hover:bg-gray-100 rounded-full"
              >
                <ArrowLeft className="h-5 w-5 text-gray-600" />
              </button>
              <h2 className="text-lg font-medium text-gray-900">
                Forget Password
              </h2>
            </div>

            {/* Body */}
            <div className="p-6 pt-0 space-y-4">
              <h2 className="text-sm  text-black">
                Enter you email address to reset your password
              </h2>
              <EmailInputField
                value={formData.email}
                onChange={(val) => handleInputChange("email", val)}
                showLabel
                label="Enter Your Email"
                placeHolder="Enter Your Email"
              />

              {/* Send OTP */}
              <button
                type="button"
                onClick={handleSendOtp}
                className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition mt-6"
              >
                Send OTP
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ------------------------------
       * MODAL: VERIFY EMAIL (OTP)
       * ----------------------------- */}
      {isEmailVerificationModalOpen && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-md mx-auto p-6">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <button
                onClick={closeVerifyEmailModal}
                className="p-1 hover:bg-gray-100 rounded-full"
              >
                <ArrowLeft className="h-5 w-5 text-black" />
              </button>
              <h2 className="text-lg font-medium text-black">Verify E-mail</h2>
            </div>

            {/* Description */}
            <p className="text-sm text-black mb-6">
              Please enter the OTP we have sent you in your email.
            </p>

            {/* OTP Inputs */}
            <OTPInputField
              value={formData.otp}
              onChange={(newOtp) =>
                setFormData((prev) => ({ ...prev, otp: newOtp }))
              }
              length={6}
            />

            {/* Resend */}
            <div className="flex justify-between text-sm mb-6">
              <span>Didn't receive the code?</span>
              <button className="text-black font-medium">Resend</button>
            </div>

            {/* Verify Button */}
            <button
              type="button"
              onClick={handleVerifyOtp}
              className="w-full bg-black text-white py-3 rounded-md font-medium hover:bg-gray-800 transition"
            >
              Verify
            </button>
          </div>
        </div>
      )}

      {/* ------------------------------
       * MODAL: RESET PASSWORD
       * ----------------------------- */}
      {isResetPasswordModalOpen && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-md mx-auto">
            {/* Header */}
            <div className="flex items-center gap-3 p-4 ">
              <button
                onClick={closeResetPasswordModal}
                className="p-1 hover:bg-gray-100 rounded-full"
              >
                <ArrowLeft className="h-5 w-5 text-black" />
              </button>
              <h2 className="text-lg font-medium text-gray-900">
                Reset Password
              </h2>
            </div>

            {/* Body */}
            <div className="p-6 space-y-4">
              <PasswordInputField
                value={formData.oldPassword}
                onChange={(val) => handleInputChange("oldPassword", val)}
                showLabel={false}
                placeHolder="Set your password"
              />
              <PasswordInputField
                value={formData.newPassword}
                onChange={(val) => handleInputChange("newPassword", val)}
                showLabel={false}
                placeHolder="Re-enter password"
              />

              {/* Submit */}
              <button
                type="button"
                onClick={handleResetPassword}
                className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition mt-6"
              >
                Update password
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SettingsPassChangeModals;
