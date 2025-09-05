// import React, { useState } from "react";
// import { ArrowLeft, Send, MoreVertical, Menu } from "lucide-react";

// const SupportChatting = () => {
//   const [message, setMessage] = useState("");
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const handleSendMessage = () => {
//     if (message.trim()) {
//       // Handle message sending logic here
//       setMessage("");
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       handleSendMessage();
//     }
//   };

//   return (
//     <div className="flex h-screen bg-gray-50">
//       {/* Sidebar - Hidden on mobile by default */}
//       <div
//         className={`${
//           isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//         } lg:translate-x-0 fixed lg:static inset-y-0 left-0 w-80 bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out z-30`}
//       >
//         <div className="flex items-center justify-between p-4 border-b border-gray-200">
//           <div className="flex items-center space-x-3">
//             <img
//               src="/Logo/Logo.png"
//               alt="TROKIS Logo"
//               className="w-8 h-8 object-contain"
//             />
//             <h1 className="text-xl font-semibold text-gray-800">TROKIS</h1>
//           </div>
//           <button
//             onClick={() => setIsSidebarOpen(false)}
//             className="lg:hidden p-1 rounded-md hover:bg-gray-100"
//           >
//             <ArrowLeft className="w-5 h-5" />
//           </button>
//         </div>

//         {/* Chat list - Add your chat list items here */}
//         <div className="p-4">
//           <div className="text-sm text-gray-500 mb-4">Recent Chats</div>
//           {/* Add chat items here */}
//         </div>
//       </div>

//       {/* Overlay for mobile sidebar */}
//       {isSidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
//           onClick={() => setIsSidebarOpen(false)}
//         />
//       )}

//       {/* Main chat area */}
//       <div className="flex-1 flex flex-col">
//         {/* Header */}
//         <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
//           <div className="flex items-center space-x-3">
//             <button
//               onClick={() => setIsSidebarOpen(true)}
//               className="lg:hidden p-2 rounded-md hover:bg-gray-100"
//             >
//               <Menu className="w-5 h-5" />
//             </button>
//             <button className="hidden lg:flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100">
//               <ArrowLeft className="w-5 h-5 text-gray-600" />
//               <span className="text-sm text-gray-600">Back</span>
//             </button>
//           </div>

//           <div className="flex items-center space-x-3">
//             <div className="flex items-center space-x-3">
//               <img
//                 src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                 alt="Benedict Fong Duan"
//                 className="w-10 h-10 rounded-full object-cover"
//               />
//               <div className="hidden sm:block">
//                 <h3 className="text-sm font-medium text-gray-900">
//                   Benedict Fong Duan
//                 </h3>
//               </div>
//             </div>
//             <button className="p-2 rounded-md hover:bg-gray-100">
//               <MoreVertical className="w-5 h-5 text-gray-600" />
//             </button>
//           </div>
//         </div>

//         {/* Chat messages */}
//         <div className="flex-1 overflow-y-auto p-4 space-y-6">
//           {/* Incoming message */}
//           <div className="flex items-start space-x-3">
//             <img
//               src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//               alt="User"
//               className="w-8 h-8 rounded-full object-cover flex-shrink-0"
//             />
//             <div className="bg-gray-200 rounded-2xl rounded-tl-md px-4 py-2 max-w-xs sm:max-w-md">
//               <p className="text-sm text-gray-800">
//                 Lorem ipsum dolor sit amet, consectetur
//               </p>
//             </div>
//           </div>

//           {/* Outgoing messages */}
//           <div className="flex justify-end">
//             <div className="bg-black text-white rounded-2xl rounded-tr-md px-4 py-2 max-w-xs sm:max-w-md">
//               <p className="text-sm">Lorem ipsum dolor sit amet, consectetur</p>
//             </div>
//           </div>

//           <div className="flex justify-end">
//             <div className="bg-black text-white rounded-2xl rounded-tr-md px-4 py-2 max-w-xs sm:max-w-md">
//               <p className="text-sm">Lorem ipsum dolor sit amet, consectetur</p>
//             </div>
//           </div>

//           {/* Incoming message */}
//           <div className="flex items-start space-x-3">
//             <img
//               src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//               alt="User"
//               className="w-8 h-8 rounded-full object-cover flex-shrink-0"
//             />
//             <div className="bg-gray-200 rounded-2xl rounded-tl-md px-4 py-2 max-w-xs sm:max-w-md">
//               <p className="text-sm text-gray-800">
//                 Just got here so 5 mins delay!
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Message input */}
//         <div className="bg-white border-t border-gray-200 p-4">
//           <div className="flex items-center space-x-3">
//             <div className="flex-1 relative">
//               <input
//                 type="text"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 onKeyPress={handleKeyPress}
//                 placeholder="Type your message..."
//                 className="w-full px-4 py-3 pr-12 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
//               />
//               <button
//                 onClick={handleSendMessage}
//                 disabled={!message.trim()}
//                 className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-blue-500 hover:text-blue-600 disabled:text-gray-400 disabled:cursor-not-allowed"
//               >
//                 <Send className="w-5 h-5" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SupportChatting;

import React, { useState } from "react";
import { ArrowLeft, Send } from "lucide-react";

const ChatPage = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur",
      sender: "other",
      avatar: "https://i.pravatar.cc/40?img=5",
    },
    { id: 2, text: "Lorem ipsum dolor sit amet, consectetur", sender: "me" },
    { id: 3, text: "Lorem ipsum dolor sit amet, consectetur", sender: "me" },
    {
      id: 4,
      text: "Just got here, so 5 more days!",
      sender: "other",
      avatar: "https://i.pravatar.cc/40?img=11",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim() === "") return;
    setMessages([
      ...messages,
      { id: Date.now(), text: newMessage, sender: "me" },
    ]);
    setNewMessage("");
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <div className="  bg-white shadow ">
        <div className="container mx-auto flex items-center gap-3 py-3 px-5">
          <button className="p-2 hover:bg-gray-200 rounded-full">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <img
            src="https://i.pravatar.cc/40?img=3"
            alt="user"
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">Benedict Fring Dron</span>
        </div>
      </div>

      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-end gap-2 ${
              msg.sender === "me" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.sender !== "me" && (
              <img
                src={msg.avatar}
                alt="avatar"
                className="w-8 h-8 rounded-full"
              />
            )}
            <div
              className={`px-4 py-2 rounded-2xl text-sm max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg ${
                msg.sender === "me"
                  ? "bg-black text-white rounded-br-none"
                  : "bg-gray-300 text-black rounded-bl-none"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input Box */}
      <div className="bg-white p-3 flex items-center gap-2 shadow">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
