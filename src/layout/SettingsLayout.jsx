import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const SettingsPage = () => {
  const pages = [
    {
      path: "/settings/personal-information",
      label: "Personal Information",
    },
    {
      path: "/settings/change-password",
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

  return (
    <div className=" bg-gray-100 mt-9">
      <div className="w-full  bg-white shadow-md rounded-lg py-[125px] px-5 sm:px-[50px] lg:px-[100px]">
        {pages.map((item, index) => (
          <Link key={index} to={item?.path}>
            <button className="flex justify-between items-center w-full text-left px-4 py-3 mb-3 border border-gray-300 bg-gray-100 rounded-md hover:bg-gray-200 transition">
              <span className="text-[#545454]] font-medium">{item.label}</span>
              <ChevronRight className="h-5 w-5 text-[#545454]" />
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SettingsPage;
