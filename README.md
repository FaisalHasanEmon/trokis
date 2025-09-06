# Trokis Admin Dashboard

### Folder Structure

```
|   index.css
|   main.jsx
|
+---assets
+---components
|   +---navbar
|   |       Navbar.jsx
|   |
|   +---readAndEdit
|   |       ReadAndEdit.jsx
|   |
|   +---settingsPageComponents
|   |       EmailInputField.jsx
|   |       OtpInputField.jsx
|   |       PasswordInputField.jsx
|   |       SettingsPassChangeModals.jsx
|   |
|   +---sideBar
|   |       SideBar.jsx
|   |
|   \---table
|       |   Table.jsx
|       |
|       \---tableAction
|               TableActions.css
|               TableActions.jsx
|
+---context
|       AuthContext.jsx
|
+---hooks
|       useAuth.jsx
|
+---layout
|       AdminLayout.jsx
|       AuthLayout.jsx
|
+---pages
|   +---authPages
|   |   +---forgetPassword
|   |   |       ForgetPassword.jsx
|   |   |
|   |   +---login
|   |   |       Login.jsx
|   |   |
|   |   +---resetPassword
|   |   |       ResetPassword.jsx
|   |   |
|   |   \---verifyEmail
|   |           VerifyEmail.jsx
|   |
|   \---dashboardPages
|       +---categories
|       |       Categories.jsx
|       |
|       +---dashboard
|       |       Dashboard.jsx
|       |
|       +---driver
|       |       Driver.jsx
|       |
|       +---driverRequest
|       |       DriverRequest.jsx
|       |
|       +---earning
|       |       Earning.jsx
|       |
|       +---settings
|       |   |   Settings.jsx
|       |   |
|       |   +---personalInformation
|       |   |       PersonalInformation.jsx
|       |   |
|       |   +---privacyPolicy
|       |   |       PrivacyPolicy.jsx
|       |   |
|       |   +---termsAndConditions
|       |   |       TermsAndConditions.jsx
|       |   |
|       |   \---trustAndSafety
|       |           TrustAndSafety.jsx
|       |
|       +---support
|       |   |   Support.jsx
|       |   |
|       |   \---supportChatting
|       |           SupportChatting.jsx
|       |
|       \---user
|               User.jsx
|
\---routes
        routes.jsx
```

### Library And Packages

**Dependencies**

- html2canvas
- jspdf
- lottie-react
- lucide-react
- react-quill-new
- react-router-dom
- recharts
- tailwindcss
