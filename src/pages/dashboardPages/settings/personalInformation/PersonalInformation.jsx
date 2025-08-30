import React, { useState } from "react";
import { Edit3 } from "lucide-react";

const PersonalInformation = () => {
  const [formData, setFormData] = useState({
    name: "Jane Cooper",
    email: "janecooper@gmail.com",
    phone: "30059722",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="  py-6">
      <div className="w-full">
        {/* Personal Information Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h1 className="text-lg font-medium text-gray-900">
              Personal Information
            </h1>
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors">
              <Edit3 size={16} />
              Edit Profile
            </button>
          </div>

          {/* Content */}
          <div className="py-16 pl-28 pr-6">
            <div className="flex gap-8 ">
              {/* Profile Section */}
              <div className="flex flex-col items-center border border-gray-400 px-[78px] py-16 bg-[#FAFAFA] rounded-[8px]">
                <div className="relative">
                  <img
                    src="/SettingsPagePhoto/adminUpdatePhoto.jpg"
                    alt="Profile"
                    className="w-36 h-36 border-[5px] rounded-full object-cover"
                  />
                </div>
                <div className="mt-8 text-center">
                  <div className="text-lg text-black font-medium">Profile</div>
                  <div className="inline-flex items-center justify-center px-3 py-1 mt-1  text-black text-2xl font-medium ">
                    Admin
                  </div>
                </div>
              </div>

              {/* Form Section */}
              <div className="flex-1 space-y-6">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Phone Number Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="flex">
                    <div className="flex items-center px-3 py-2 bg-gray-50 border border-r-0 border-gray-300 rounded-l-md">
                      <img
                        src="https://flagcdn.com/w20/us.png"
                        alt="US Flag"
                        className="w-5 h-3 mr-2"
                      />
                      <span className="text-sm text-gray-600">+1</span>
                    </div>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;

// import React from "react";
// import { Pencil } from "lucide-react";

// const ProfilePage = () => {
//   return (
//     <div className=" bg-gray-100 flex items-center justify-center mt-32">
//       <div className="w-full  bg-white rounded-lg shadow p-6">
//         {/* Header */}
//         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
//           <h2 className="text-xl font-semibold">Personal Information</h2>
//           <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm mt-3 sm:mt-0">
//             <Pencil size={16} /> Edit Profile
//           </button>
//         </div>

//         {/* Content */}
//         <div className="flex flex-col md:flex-row gap-6">
//           {/* Profile Card */}
//           <div className="flex flex-col items-center border rounded-lg p-4 w-full md:w-1/3">
//             <img
//               src="https://via.placeholder.com/150"
//               alt="Profile"
//               className="w-32 h-32 rounded-full object-cover"
//             />
//             <p className="mt-4 text-gray-700 font-medium">Profile</p>
//             <p className="text-lg font-semibold">Admin</p>
//           </div>

//           {/* Form Section */}
//           <div className="flex-1">
//             <form className="grid grid-cols-1 gap-4">
//               {/* Name */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   defaultValue="Jane Cooper"
//                   className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
//                 />
//               </div>

//               {/* Email */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   E-mail
//                 </label>
//                 <input
//                   type="email"
//                   defaultValue="alkhahlaksalkgkgalk@hmail.com"
//                   className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
//                 />
//               </div>

//               {/* Phone Number */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Phone Number
//                 </label>
//                 <div className="flex gap-2">
//                   <div className="flex items-center gap-2 border rounded-lg px-3 py-2">
//                     <img
//                       src="https://flagcdn.com/us.svg"
//                       alt="US Flag"
//                       className="w-6 h-4 rounded-sm"
//                     />
//                     <span className="text-sm">+1242</span>
//                   </div>
//                   <input
//                     type="text"
//                     defaultValue="3000597212"
//                     className="flex-1 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
//                   />
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;
