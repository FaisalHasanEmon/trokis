import AdminLayout from "../layout/AdminLayout";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/dashboardPages/dashboard/Dashboard";
import User from "../pages/dashboardPages/user/User";
import Earning from "../pages/dashboardPages/earning/Earning";
import Driver from "../pages/dashboardPages/driver/Driver";
import DriverRequest from "../pages/dashboardPages/driverRequest/DriverRequest";
import Categories from "../pages/dashboardPages/categories/Categories";
import Support from "../pages/dashboardPages/support/Support";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/authPages/login/Login";
import ForgetPassword from "../pages/authPages/forgetPassword/ForgetPassword";
import VerifyEmail from "../pages/authPages/verifyEmail/VerifyEmail";
import ResetPassword from "../pages/authPages/resetPassword/ResetPassword";
import PersonalInformation from "../pages/dashboardPages/settings/personalInformation/PersonalInformation";
import Settings from "../pages/dashboardPages/settings/Settings";
import TermsAndConditions from "../pages/dashboardPages/settings/termsAndConditions/TermsAndConditions";
import PrivacyPolicy from "../pages/dashboardPages/settings/privacyPolicy/PrivacyPolicy";
import TrustAndSafety from "../pages/dashboardPages/settings/trustAndSafety/TrustAndSafety";
import SupportChatting from "../pages/dashboardPages/support/supportChatting/SupportChatting";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/user",
        element: <User></User>,
      },
      {
        path: "/earning",
        element: <Earning></Earning>,
      },
      {
        path: "/driver",
        element: <Driver></Driver>,
      },
      {
        path: "/driver-request",
        element: <DriverRequest></DriverRequest>,
      },
      {
        path: "/categories",
        element: <Categories></Categories>,
      },
      {
        path: "/settings",
        element: <Settings></Settings>,
      },
      {
        path: "/support",
        element: <Support></Support>,
      },

      {
        path: "/settings/personal-information",
        element: <PersonalInformation></PersonalInformation>,
      },
      {
        path: "/settings/terms-and-conditions",
        element: <TermsAndConditions></TermsAndConditions>,
      },
      {
        path: "/settings/privacy-policy",
        element: <PrivacyPolicy></PrivacyPolicy>,
      },
      {
        path: "/settings/trust-and-safety",
        element: <TrustAndSafety></TrustAndSafety>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/forget-password",
        element: <ForgetPassword></ForgetPassword>,
      },
      {
        path: "/auth/verify-email",
        element: <VerifyEmail></VerifyEmail>,
      },
      {
        path: "/auth/reset-password",
        element: <ResetPassword></ResetPassword>,
      },
    ],
  },
  {
    path: "/support/contact",
    element: <SupportChatting></SupportChatting>,
  },
]);

export default routes;
