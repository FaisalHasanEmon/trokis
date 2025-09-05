import { Info, X } from "lucide-react";
import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./TableActions.css";

const TableActions = ({ user, dataOf }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const modalRef = useRef(null);
  const [isPdfMode, setIsPdfMode] = useState(false);

  const handleInfoClick = () => {
    if (dataOf.toLowerCase() === "support") return navigate("/support/contact");
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  // Download
  const handleDownload = async () => {
    setIsPdfMode(true); //hide Button icon
    await new Promise((resolve) => setTimeout(resolve, 100)); //allow Rerender

    const input = modalRef.current;
    const canvas = await html2canvas(input, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

    // Get the current timestamp in milliseconds
    const timestamp = Date.now();

    // Create a unique filename using the timestamp
    const filename = `earning-details-${timestamp}.pdf`;

    // Save the PDF with the unique filename
    pdf.save(filename);

    setIsPdfMode(false); // restore buttons/icons
  };

  // Modal Content
  const getModalContent = () => {
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
        <div className="modal-container">
          <div className="modal-header">
            <h2 className="modal-title">User Details</h2>
            <button onClick={closeModal} className="modal-close-btn">
              <X className="icon-white" />
            </button>
          </div>
          <div className="modal-body">
            <div className="modal-row">
              <span className="label">#SL</span>
              <span className="value">{modalData.sl}</span>
            </div>
            <div className="modal-row">
              <span className="label">User Name</span>
              <span className="value">{modalData.name}</span>
            </div>
            <div className="modal-row">
              <span className="label">Email</span>
              <span className="value">{modalData.email}</span>
            </div>
            <div className="modal-row">
              <span className="label">Mobile phone:</span>
              <span className="value">{modalData.phone}</span>
            </div>
            <div className="modal-row">
              <span className="label">Service</span>
              <span className="value">{modalData.service}</span>
            </div>
            <div className="modal-row">
              <span className="label">Date</span>
              <span className="value">{modalData.date}</span>
            </div>
            <div className="modal-row">
              <span className="label">Time:</span>
              <span className="value">{modalData.time}</span>
            </div>
            <div className="modal-row">
              <span className="label">Amount:</span>
              <span className="value bold">${modalData.amount}</span>
            </div>
          </div>
        </div>
      );
    }

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
        <div className="modal-container">
          <div className="modal-header">
            <h2 className="modal-title">Transaction</h2>
            {!isPdfMode && (
              <button onClick={closeModal} className="modal-close-btn ">
                <X className="icon-white" />
              </button>
            )}
          </div>
          <div className="modal-body">
            <div className="modal-row">
              <span className="label">Transaction ID :</span>
              <span className="value">{transactionData.transactionId}</span>
            </div>
            <div className="modal-row">
              <span className="label">Date :</span>
              <span className="value">{transactionData.date}</span>
            </div>
            <div className="modal-row">
              <span className="label">User name :</span>
              <span className="value">{transactionData.userName}</span>
            </div>
            <div className="modal-row">
              <span className="label">A/C number :</span>
              <span className="value">{transactionData.accountNumber}</span>
            </div>
            <div className="modal-row">
              <span className="label">A/C holder name :</span>
              <span className="value">{transactionData.accountHolderName}</span>
            </div>
            <div className="modal-row">
              <span className="label">Transaction amount :</span>
              <span className="value bold">
                ${transactionData.transactionAmount}
              </span>
            </div>
            <div className="modal-row">
              <span className="label">Service :</span>
              <span className="value">{transactionData.service}</span>
            </div>
            <div className="download-btn-container ">
              {!isPdfMode && (
                <button onClick={handleDownload} className="download-btn">
                  Download
                </button>
              )}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="modal-info">
        <h2 className="info-title">Information</h2>
        <p className="info-text">
          Details for {selectedUser?.name || "selected item"} at{" "}
          {location.pathname}
        </p>
      </div>
    );
  };

  return (
    <>
      <button onClick={handleInfoClick} className="action-btn">
        <Info className="icon-gray" />
      </button>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-backdrop" onClick={closeModal}></div>
          <div ref={modalRef} className="modal-content">
            <div className="p-0">{getModalContent()}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default TableActions;
