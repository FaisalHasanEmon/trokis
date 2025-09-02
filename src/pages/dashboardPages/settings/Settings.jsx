// import { ChevronRight, Lock, Eye, EyeOff, ArrowLeft } from "lucide-react";
// import { useState } from "react";
// import PasswordInputField from "../../../components/settingsInputFields/PasswordInputField";
// import EmailInputField from "../../../components/settingsInputFields/EmailInputField";

// const SettingsPage = () => {
//   // Change Password Modal State
//   const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] =
//     useState(false);
//   // Forget Password Modal State
//   const [isForgetPasswordModalOpen, setIsForgetPasswordModalOpen] =
//     useState(false);
//   // Email Verification Modal State
//   const [isEmailVerificationModalOpen, setIsEmailVerificationModalOpen] =
//     useState(false);

//   // Change Password Form Modal
//   const [formData, setFormData] = useState({
//     oldPassword: "",
//     newPassword: "",
//     confirmPassword: "",
//     email: "",
//     verificationCode: "",
//     resetPassword: "",
//     confirmResetPassword: "",
//   });

//   // Pages Routes
//   const pages = [
//     {
//       path: "/settings/personal-information",
//       label: "Personal Information",
//     },
//     {
//       label: "Change Password",
//     },
//     {
//       path: "/settings/terms-and-conditions",
//       label: "Terms & Condition",
//     },
//     {
//       path: "/settings/privacy-policy",
//       label: "Privacy Policy",
//     },
//     {
//       path: "/settings/trust-and-safety",
//       label: "Trust & Safety",
//     },
//   ];

//   // Input Field Functions
//   const handleInputChange = (field, value) => {
//     setFormData((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   };

//   // Handle Change Password Function
//   const handleChangePassword = (e) => {
//     e.preventDefault();

//     if (formData.newPassword !== formData.confirmPassword) {
//       alert("New passwords don't match!");
//       return;
//     }

//     if (formData.newPassword.length < 8 || formData.newPassword.length > 10) {
//       alert("Password must be 8-10 characters long!");
//       return;
//     }

//     console.log("Password update submitted:", formData);
//     alert("Password updated successfully!");

//     closeChangePasswordModal();
//     setIsEmailVerificationModalOpen(true); // Open email verification after password update
//   };

//   // Close Change Password Modal
//   const closeChangePasswordModal = () => {
//     setIsChangePasswordModalOpen(false);
//     setFormData((prev) => ({
//       ...prev,
//       oldPassword: "",
//       newPassword: "",
//       confirmPassword: "",
//     }));
//   };

//   // Close Forget Password Modal
//   const closeForgetPasswordModal = () => {
//     setIsForgetPasswordModalOpen(false);
//     setFormData((prev) => ({
//       ...prev,
//       email: "",
//     }));
//   };

//   // Close Email Verification Modal
//   const closeVerifyEmailModal = () => {
//     setIsEmailVerificationModalOpen(false);
//   };

//   // Forget Password Button
//   const handleForgetPassword = () => {
//     setIsForgetPasswordModalOpen(true);
//     setIsChangePasswordModalOpen(false);
//   };

//   // Handle Send OTP from Forget Password Modal
//   const handleSendOtp = () => {
//     setIsForgetPasswordModalOpen(false);
//     setIsEmailVerificationModalOpen(true);
//   };

//   return (
//     <div className="bg-gray-100 mt-9">
//       <div className="w-full bg-white shadow-md rounded-lg py-[125px] px-5 sm:px-[50px] lg:px-[100px]">
//         {pages.map((item, index) => {
//           if (item?.label.toLowerCase().includes("password")) {
//             return (
//               <button
//                 key={index}
//                 onClick={() => setIsChangePasswordModalOpen(true)}
//                 className="flex justify-between items-center w-full text-left px-4 py-3 mb-3 border border-gray-300 bg-gray-100 rounded-md hover:bg-gray-200 transition"
//               >
//                 <span className="text-[#545454] font-medium">{item.label}</span>
//                 <ChevronRight className="h-5 w-5 text-[#545454]" />
//               </button>
//             );
//           } else {
//             return (
//               <a key={index} href={item?.path}>
//                 <button className="flex justify-between items-center w-full text-left px-4 py-3 mb-3 border border-gray-300 bg-gray-100 rounded-md hover:bg-gray-200 transition">
//                   <span className="text-[#545454] font-medium">
//                     {item.label}
//                   </span>
//                   <ChevronRight className="h-5 w-5 text-[#545454]" />
//                 </button>
//               </a>
//             );
//           }
//         })}
//       </div>

//       {/* Password Change Modal */}
//       {isChangePasswordModalOpen && (
//         <div className="fixed inset-0 bg-black/30 bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-lg w-full max-w-md mx-auto relative">
//             <div className="flex items-center justify-between p-4 border-b border-gray-200">
//               <div className="flex items-center gap-3">
//                 <button
//                   onClick={closeChangePasswordModal}
//                   className="p-1 hover:bg-gray-100 rounded-full transition"
//                 >
//                   <ArrowLeft className="h-5 w-5 text-gray-600" />
//                 </button>
//                 <h2 className="text-lg font-medium text-gray-900">
//                   Change Password
//                 </h2>
//               </div>
//             </div>

//             <div className="p-6">
//               <p className="text-sm text-gray-600 mb-6">
//                 Your password must be 8-10 character long.
//               </p>

//               <div className="space-y-4">
//                 <PasswordInputField
//                   value={formData.oldPassword}
//                   onChange={(val) => handleInputChange("oldPassword", val)}
//                   showLabel={true}
//                   label="Enter old Password"
//                   placeHolder="Enter old password"
//                 />
//                 <PasswordInputField
//                   value={formData.newPassword}
//                   onChange={(val) => handleInputChange("newPassword", val)}
//                   showLabel={true}
//                   label="Set new password"
//                   placeHolder="Set new password"
//                 />
//                 <PasswordInputField
//                   value={formData.confirmPassword}
//                   onChange={(val) => handleInputChange("confirmPassword", val)}
//                   showLabel={true}
//                   label="Re-enter new password"
//                   placeHolder="Re-enter new password"
//                 />

//                 <div className="text-left">
//                   <button
//                     type="button"
//                     className="text-sm text-black "
//                     onClick={handleForgetPassword}
//                   >
//                     Forget Password?
//                   </button>
//                 </div>

//                 <button
//                   type="button"
//                   onClick={handleChangePassword}
//                   className="w-full bg-black text-white py-3 rounded-md font-medium hover:bg-gray-800 transition mt-6"
//                   disabled={
//                     !formData.oldPassword ||
//                     !formData.newPassword ||
//                     !formData.confirmPassword
//                   }
//                 >
//                   Update password
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Forget Password Modal */}
//       {isForgetPasswordModalOpen && (
//         <div className="fixed inset-0 bg-black/30 bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-lg w-full max-w-md mx-auto relative">
//             <div className="flex items-center justify-between p-4 border-b border-gray-200">
//               <div className="flex items-center gap-3">
//                 <button
//                   onClick={closeForgetPasswordModal}
//                   className="p-1 hover:bg-gray-100 rounded-full transition"
//                 >
//                   <ArrowLeft className="h-5 w-5 text-gray-600" />
//                 </button>
//                 <h2 className="text-lg font-medium text-gray-900">
//                   Forget Password
//                 </h2>
//               </div>
//             </div>

//             <div className="p-6">
//               <p className="text-sm text-gray-600 mb-6">
//                 Please enter your email address to reset your password
//               </p>

//               <div className="space-y-4">
//                 <EmailInputField
//                   value={formData.email}
//                   onChange={(val) => handleInputChange("email", val)}
//                   showLabel={true}
//                   label="Enter Your Email"
//                   placeHolder="Enter Your Email"
//                 />

//                 <button
//                   type="button"
//                   onClick={handleSendOtp}
//                   className="w-full bg-black text-white py-3 rounded-md font-medium hover:bg-gray-800 transition mt-6"
//                 >
//                   Send OTP
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Email Verification Modal */}
//       {isEmailVerificationModalOpen && (
//         <div className="fixed inset-0 bg-black/30 bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-lg w-full max-w-md mx-auto relative">
//             <div className="flex items-center justify-between p-4 border-b border-gray-200">
//               <div className="flex items-center gap-3">
//                 <button
//                   onClick={closeVerifyEmailModal}
//                   className="p-1 hover:bg-gray-100 rounded-full transition"
//                 >
//                   <ArrowLeft className="h-5 w-5 text-gray-600" />
//                 </button>
//                 <h2 className="text-lg font-medium text-gray-900">
//                   Verify Email
//                 </h2>
//               </div>
//             </div>

//             <div className="p-6">
//               <p className="text-sm text-gray-600 mb-6">
//                 Enter the verification code sent to your email.
//               </p>

//               <div className="space-y-4">
//                 <EmailInputField
//                   value={formData.verificationCode}
//                   onChange={(val) => handleInputChange("verificationCode", val)}
//                   showLabel={true}
//                   label="Enter OTP"
//                   placeHolder="Enter OTP"
//                 />

//                 <button
//                   type="button"
//                   className="w-full bg-black text-white py-3 rounded-md font-medium hover:bg-gray-800 transition mt-6"
//                 >
//                   Verify
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SettingsPage;

import { ChevronRight, ArrowLeft } from "lucide-react";
import { useState } from "react";
import PasswordInputField from "../../../components/settingsInputFields/PasswordInputField";
import EmailInputField from "../../../components/settingsInputFields/EmailInputField";
import OTPInputField from "../../../components/settingsInputFields/OtpInputField";

const SettingsPage = () => {
  /** ------------------------------
   * STATE MANAGEMENT
   * ----------------------------- */
  // Modal visibility states
  const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] =
    useState(false);
  const [isForgetPasswordModalOpen, setIsForgetPasswordModalOpen] =
    useState(false);
  const [isEmailVerificationModalOpen, setIsEmailVerificationModalOpen] =
    useState(false);
  const [isResetPasswordModalOpen, setIsResetPasswordModalOpen] =
    useState(false);

  // Form data state for different modals
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
    email: "",
    otp: ["", "", "", "", "", ""], // Array for 6 OTP digits
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
    { path: "/settings/privacy-policy", label: "Privacy Policy" },
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
    // Validate new password match
    if (formData.newPassword !== formData.confirmPassword) {
      alert("New passwords don't match!");
      return;
    }
    // Validate length
    if (formData.newPassword.length < 8 || formData.newPassword.length > 10) {
      alert("Password must be 8-10 characters long!");
      return;
    }
    // Close modal and open OTP verification
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
    // After email is entered, move to OTP verification
    setIsForgetPasswordModalOpen(false);
    setIsEmailVerificationModalOpen(true);
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
    // Close OTP modal and open Reset Password modal
    setIsEmailVerificationModalOpen(false);
    setIsResetPasswordModalOpen(true);
  };

  /** ------------------------------
   * RESET PASSWORD FLOW
   * ----------------------------- */
  const handleResetPassword = () => {
    // Validate passwords
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
      <div className="w-full bg-white shadow-md rounded-lg py-[125px] px-5 sm:px-[50px] lg:px-[100px]">
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

      {/* ------------------------------
       * MODAL: CHANGE PASSWORD
       * ----------------------------- */}
      {isChangePasswordModalOpen && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 p-4">
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
    </div>
  );
};

export default SettingsPage;
