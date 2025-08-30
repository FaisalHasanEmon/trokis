import React, { useState } from "react";
import { Edit3 } from "lucide-react";

const PersonalInformation = () => {
  const [edit, setEdit] = useState(true);
  const [formData, setFormData] = useState({
    name: "Jane Cooper",
    email: "janecooper@gmail.com",
    phone: "30059722",
  });

  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  const handleUpdatePersonalInfo = () => {
    console.log(formData);
  };

  return (
    <div className="py-6">
      <div className="w-full">
        {/* Personal Information Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          {/* Header */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
            <h1 className="text-lg font-medium text-gray-900">
              Personal Information
            </h1>
            <button
              onClick={handleEdit}
              hidden={edit ? false : true}
              className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors"
            >
              <Edit3 size={16} />
              Edit Profile
            </button>
          </div>

          {/* Content */}
          <div className="py-8 px-4 sm:px-6 lg:py-12 lg:px-12 space-y-6">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
              {/* Profile Section */}
              <div className="flex flex-col items-center border border-gray-300 px-6 py-8 sm:px-10 sm:py-12 bg-[#FAFAFA] rounded-lg flex-shrink-0">
                <div className="relative">
                  <img
                    src="/SettingsPagePhoto/adminUpdatePhoto.jpg"
                    alt="Profile"
                    className="w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 border-[4px] rounded-full object-cover"
                  />
                </div>
                <div className="mt-6 text-center">
                  <div className="text-lg text-black font-medium">Profile</div>
                  <div className="inline-flex items-center justify-center px-3 py-1 mt-1 text-black text-xl sm:text-2xl font-medium">
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your name"
                    readOnly={edit ? true : false}
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
                    readOnly={edit ? true : false}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                      readOnly={edit ? true : false}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Save Button */}
            <div className="w-full flex justify-end">
              <button
                hidden={edit ? true : false}
                onClick={() => {
                  handleEdit();
                  handleUpdatePersonalInfo();
                }}
                className="border bg-black hover:bg-black/80 py-3 px-6 sm:py-4 sm:px-8 rounded-full text-white font-medium text-sm sm:text-base"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
