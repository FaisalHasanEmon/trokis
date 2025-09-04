import { Info, X } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const TableActions = ({ user, dataOf }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleInfoClick = () => {
    if (dataOf === "support") return navigate("/support/contact");
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  // same modal content function moved here
  const getModalContent = () => {
    // For User Page
    if (
      (location.pathname === "/user" || location.pathname === "/") &&
      selectedUser
    ) {
      const modalData = {
        sl: selectedUser.id || 78,
        name: selectedUser.name || "Jane Cooper",
        email: selectedUser.email || "abc@email.com",
        phone: selectedUser.phone || "+37236838",
        service: selectedUser.service || "Moving",
        date: selectedUser.date || "29 July 2024",
        time: selectedUser.time || "07:30 PM",
        amount: selectedUser.amount || "565",
      };

      return (
        <div className="bg-white">
          <div className="flex items-center justify-center p-4  border-gray-200 relative">
            <h2 className="text-lg font-medium text-gray-900 text-center">
              User Details
            </h2>
            <button
              onClick={closeModal}
              className="p-1  rounded-tr-lg rounded-bl-[10px] transition-colors bg-red-500 absolute top-0 right-0"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">#SL</span>
              <span className="text-sm text-gray-900">{modalData.sl}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">
                User Name
              </span>
              <span className="text-sm text-gray-900">{modalData.name}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">Email</span>
              <span className="text-sm text-gray-900">{modalData.email}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">
                Mobile phone:
              </span>
              <span className="text-sm text-gray-900">{modalData.phone}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">Service</span>
              <span className="text-sm text-gray-900">{modalData.service}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">Date</span>
              <span className="text-sm text-gray-900">{modalData.date}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">Time:</span>
              <span className="text-sm text-gray-900">{modalData.time}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">Amount:</span>
              <span className="text-sm text-gray-900 font-semibold">
                ${modalData.amount}
              </span>
            </div>
          </div>
        </div>
      );
    }

    // For Earning Page
    if (location.pathname === "/earning" && selectedUser) {
      const transactionData = {
        transactionId: selectedUser.transactionId || "#12345678",
        date: selectedUser.date || "01-24-2024",
        userName: selectedUser.name || "Enrique",
        accountNumber: selectedUser.accountNumber || "**** **** **** *545",
        accountHolderName: selectedUser.accountHolderName || "Enrique",
        transactionAmount: selectedUser.transactionAmount || "10",
        service: selectedUser.service || "Moving",
      };

      return (
        <div className="bg-white">
          <div className="flex items-center justify-center p-4  border-gray-200 relative">
            <h2 className="text-lg font-medium text-gray-900 text-center">
              Transaction
            </h2>
            <button
              onClick={closeModal}
              className="p-1  rounded-tr-lg rounded-bl-[10px] transition-colors bg-red-500 absolute top-0 right-0"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>
          <div className="p-6 space-y-6">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">
                Transaction ID :
              </span>
              <span className="text-sm text-gray-900">
                {transactionData.transactionId}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">Date :</span>
              <span className="text-sm text-gray-900">
                {transactionData.date}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">
                User name :
              </span>
              <span className="text-sm text-gray-900">
                {transactionData.userName}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">
                A/C number :
              </span>
              <span className="text-sm text-gray-900">
                {transactionData.accountNumber}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">
                A/C holder name :
              </span>
              <span className="text-sm text-gray-900">
                {transactionData.accountHolderName}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">
                Transaction amount :
              </span>
              <span className="text-sm text-gray-900 font-semibold">
                ${transactionData.transactionAmount}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">
                Service :
              </span>
              <span className="text-sm text-gray-900">
                {transactionData.service}
              </span>
            </div>
            <div className="pt-4">
              <button className="w-full bg-black hover:bg-gray-800 text-white py-3 px-4 rounded-lg transition-colors font-medium">
                Download
              </button>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">Information</h2>
        <p className="text-gray-600">
          Details for {selectedUser?.name || "selected item"} at{" "}
          {location.pathname}
        </p>
      </div>
    );
  };

  return (
    <>
      {/* Action Button */}
      <button
        onClick={handleInfoClick}
        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
      >
        <Info className="w-4 h-4 text-gray-600" />
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="fixed inset-0 bg-black/75 bg-opacity-50 transition-opacity"
            onClick={closeModal}
          ></div>
          <div className="relative bg-white rounded-lg shadow-xl max-w-sm w-full mx-4">
            <div className="p-0">{getModalContent()}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default TableActions;
