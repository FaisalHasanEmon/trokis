import { ChevronRight } from "lucide-react";

const SettingsPage = () => {
  const items = [
    { label: "Personal Information" },
    { label: "Change Password" },
    { label: "Terms & Condition" },
    { label: "Privacy Policy" },
    { label: "Privacy Policy" }, // duplicate as shown in your screenshot
  ];

  return (
    <div className=" bg-gray-100 mt-9">
      <div className="w-full  bg-white shadow-md rounded-lg py-[125px] px-5 sm:px-[50px] lg:px-[100px]">
        {items.map((item, index) => (
          <button
            key={index}
            className="flex justify-between items-center w-full text-left px-4 py-3 mb-3 border border-gray-300 bg-gray-100 rounded-md hover:bg-gray-200 transition"
          >
            <span className="text-[#545454]] font-medium">{item.label}</span>
            <ChevronRight className="h-5 w-5 text-[#545454]" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default SettingsPage;
