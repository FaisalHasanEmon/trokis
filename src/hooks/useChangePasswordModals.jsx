import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

const useChangePasswordModals = (key) => {
  const getInitialState = (key) => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : false;
  };

  const [isOpen, setIsOpen] = useState(() => getInitialState(key));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(isOpen));
  }, [isOpen, key]);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const Modal = ({ title, sub_title, children }) => {
    if (!isOpen) return null;
    return (
      <div className="fixed inset-0 bg-black/30 bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg w-full max-w-md mx-auto relative">
          {/* Modal Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <button
                onClick={closeModal}
                className="p-1 hover:bg-gray-100 rounded-full transition"
              >
                <ArrowLeft className="h-5 w-5 text-gray-600" />
              </button>
              <h2 className="text-lg font-medium text-gray-900">{title}</h2>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6">
            <p className="text-sm text-gray-600 mb-6">{sub_title}</p>
            {children}
          </div>
        </div>
      </div>
    );
  };

  return { openModal, closeModal, Modal };
};

export default useChangePasswordModals;
