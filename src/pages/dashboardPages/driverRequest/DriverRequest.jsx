import React from "react";
import { MessageCircleMore, FileText } from "lucide-react";

const DriverDocumentsPage = () => {
  const documents = [
    { id: "nid", name: "NID.pdf" },
    { id: "license", name: "Driver License.pdf" },
    { id: "vehicle_front", name: "Vehicle Front.pdf" },
    { id: "driver_picture", name: "Driver Picture.pdf" },
  ];

  return (
    <div className="  py-4 md:py-6 lg:py-8">
      <div className="w-full mx-auto">
        {/* Grid layout for multiple cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* Render 6 identical cards as shown in the image */}
          {[...Array(6)].map((_, cardIndex) => (
            <div
              key={cardIndex}
              className="bg-white rounded-xl shadow-lg border border-gray-100 p-8"
            >
              {/* Driver Profile Section - Centered */}
              <div className="flex flex-col items-center text-center mb-8">
                <div className="relative mb-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center overflow-hidden">
                    {/* Profile image */}
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
                      alt="Driver"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Dianne Russell
                  </h3>
                  <MessageCircleMore className="w-5 h-5 text-black" />
                </div>
                <p className="text-[#545454]">Driver</p>
              </div>

              {/* Documents Section */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-6">
                  Documents
                </h4>

                {/* Documents Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  {documents.map((doc) => (
                    <div
                      key={doc.id}
                      className="flex flex-col items-center cursor-pointer group"
                    >
                      {/* Circular Document Icon */}
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-slate-700 rounded-full flex items-center justify-center mb-3 group-hover:bg-slate-600 transition-colors relative">
                        {/* PDF Icon */}
                        <div className="w-8 h-10 bg-white rounded-sm relative flex items-center justify-center">
                          <div className="absolute top-1 left-1 right-1">
                            <div className="w-full h-0.5 bg-red-500 mb-0.5"></div>
                            <div className="text-xs font-bold text-red-500">
                              PDF
                            </div>
                          </div>
                          {/* Document lines */}
                          <div className="absolute bottom-2 left-1 right-1 space-y-0.5">
                            <div className="w-full h-0.5 bg-gray-300"></div>
                            <div className="w-3/4 h-0.5 bg-gray-300"></div>
                            <div className="w-2/3 h-0.5 bg-gray-300"></div>
                          </div>
                        </div>
                      </div>
                      <span className="text-sm text-gray-700 text-center font-medium leading-tight">
                        {doc.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button className="flex-1 bg-black text-white py-3 px-6 rounded-xl font-semibold hover:bg-gray-800 transition-colors">
                  Approve
                </button>
                <button className="flex-1 border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
                  Decline
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DriverDocumentsPage;
