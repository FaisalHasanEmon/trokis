import { ChevronLeft, Send } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const SupportChatting = () => {
  const [showDropDown, setDropDown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [messages, setMessages] = useState([]);

  const handleDropDown = () => setDropDown(!showDropDown);
  const handleNotification = () => setShowNotifications(!showNotifications);

  const user = {
    name: "Jane Cooper",
    profileImage: "/NavbarIcons/user.png",
  };

  const notifications = [
    {
      id: 1,
      title: "New Message",
      subtitle: "You have received a new message",
      time: "2 min ago",
    },
    {
      id: 2,
      title: "Payment Successful",
      subtitle: "Your payment has been processed",
      time: "10 min ago",
    },
    {
      id: 3,
      title: "System Update",
      subtitle: "Scheduled maintenance at midnight",
      time: "30 min ago",
    },
    {
      id: 4,
      title: "Friend Request",
      subtitle: "John Doe sent you a request",
      time: "1 hr ago",
    },
    {
      id: 5,
      title: "Reminder",
      subtitle: "Meeting at 3 PM today",
      time: "2 hrs ago",
    },
    {
      id: 6,
      title: "Discount Offer",
      subtitle: "Get 20% off your next purchase",
      time: "3 hrs ago",
    },
    {
      id: 7,
      title: "Security Alert",
      subtitle: "New login from Chrome browser",
      time: "5 hrs ago",
    },
    {
      id: 8,
      title: "New Comment",
      subtitle: "Someone commented on your post",
      time: "6 hrs ago",
    },
    {
      id: 9,
      title: "Subscription",
      subtitle: "Your subscription is about to end",
      time: "Yesterday",
    },
    {
      id: 10,
      title: "Welcome!",
      subtitle: "Thanks for joining us",
      time: "2 days ago",
    },
  ];

  const notificationRef = useRef(null);
  const notificationBtnRef = useRef(null);
  const chatEndRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        showNotifications &&
        notificationRef.current &&
        !notificationRef.current.contains(event.target) &&
        notificationBtnRef.current &&
        !notificationBtnRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }
    };

    const handleScroll = (event) => {
      if (
        showNotifications &&
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }
    };

    window.addEventListener("click", handleOutsideClick);
    window.addEventListener("scroll", handleScroll, true);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [showNotifications]);

  const handleMessage = (e) => {
    e.preventDefault();
    const newMessage = e.target.message.value.trim();
    if (newMessage === "") return;
    setMessages((prev) => [...prev, { text: newMessage, sender: "me" }]);
    e.target.reset();
  };

  // Auto scroll to bottom when new message comes
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const Messages = () => {
    const latestMessages = [...messages].reverse();
    return (
      <div className="w-full flex flex-col-reverse gap-2 p-2">
        {latestMessages.map((msg, index) => (
          <div
            key={index}
            className={`w-full flex ${
              msg.sender === "me" ? "justify-end" : "justify-start"
            } items-center`}
          >
            <p
              className={`px-4 py-2 rounded-lg max-w-[75%] break-words ${
                msg.sender === "me"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {msg.text}
            </p>
          </div>
        ))}
        <div ref={chatEndRef}></div>
      </div>
    );
  };

  return (
    <div className="bg-[#F2F5F7] h-screen flex flex-col">
      {/* Navbar */}
      <nav className="mt-0 fixed left-0 top-0 lg:block py-3 z-50 lg:relative w-full">
        <div className="container mx-auto px-3 sm:px-0 flex justify-between items-center text-[#333333]">
          {/* Hidden back link */}
          <div className="block lg:hidden border border-[#333333] rounded-lg py-2 px-3">
            <Link
              to="/support"
              className="flex justify-center items-center gap-2"
            >
              <ChevronLeft size={16} />
              <p className="text-sm sm:text-base">Back</p>
            </Link>
          </div>

          {/* Logo For Large Device */}
          <div className="hidden lg:block">
            <img
              src="/Logo/contactPageLogo.png"
              className="w-[90px] sm:w-[120px]"
              alt="Logo"
            />
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3 sm:gap-6 md:gap-8">
            {/* Notification Icon */}
            <div className="relative">
              <button ref={notificationBtnRef} onClick={handleNotification}>
                <img
                  src="/NavbarIcons/notification.png"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  alt="Notification Icon"
                />
                {notifications.length > 0 && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-[18px] sm:h-[18px] rounded-full bg-[#333333] text-white flex justify-center items-center">
                    <p className="text-[9px] sm:text-[10px]">
                      {notifications.length}
                    </p>
                  </div>
                )}
              </button>

              {/* Notifications Dropdown */}
              {showNotifications && (
                <div
                  ref={notificationRef}
                  className="absolute right-0 mt-3 w-72 sm:w-80 max-h-96 overflow-y-auto bg-white border rounded-lg shadow-lg shadow-gray-500 z-50"
                >
                  <div className="p-3 border-b">
                    <h3 className="font-semibold text-base">Notifications</h3>
                  </div>
                  <ul className="divide-y">
                    {notifications.slice(0, 10).map((item) => (
                      <li
                        key={item.id}
                        className="px-4 py-3 hover:bg-gray-100 cursor-pointer transition"
                      >
                        <h4 className="text-sm font-semibold">{item.title}</h4>
                        <p className="text-xs text-gray-600 truncate">
                          {item.subtitle}
                        </p>
                        <span className="text-[10px] text-gray-400">
                          {item.time}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Profile Section */}
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={handleDropDown}
            >
              {user?.profileImage && (
                <figure className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full overflow-clip">
                  <img
                    src={user?.profileImage}
                    className="w-full h-full object-cover object-top"
                    alt="User Profile"
                  />
                </figure>
              )}
              <p className="hidden sm:block text-sm md:text-base">
                {user?.name}
              </p>
              <figure>
                <img
                  className={`${
                    showDropDown ? "rotate-180" : ""
                  } transition-transform`}
                  src="/NavbarIcons/dropDownArrow.png"
                  alt="Drop Down Arrow"
                />
              </figure>
            </div>
          </div>
        </div>

        {/* Dropdown Menu */}
        {showDropDown && (
          <div className="absolute right-0 mt-5 w-48 bg-white border rounded-lg shadow-lg shadow-gray-500 p-4">
            <ul className="space-y-2 text-sm">
              <li className="hover:bg-gray-100 px-3 py-2 rounded">Option</li>
              <li className="hover:bg-gray-100 px-3 py-2 rounded">Option</li>
              <li className="hover:bg-gray-100 px-3 py-2 rounded">Option</li>
            </ul>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="relative container px-3 sm:px-5 mx-auto flex-1 flex justify-center items-center ">
        <div className="hidden lg:block lg:absolute z-50  left-0 top-0 border border-[#333333] rounded-lg py-2 px-4 sm:px-6">
          <Link
            to="/support"
            className="flex justify-center items-center gap-2.5"
          >
            <ChevronLeft size={16} />
            <p className="text-sm sm:text-base">Back</p>
          </Link>
        </div>

        {/* Chatting Interface */}
        <div className="w-full sm:w-[95%] md:w-[85%] lg:w-5xl mt-[70px] lg:mt-2.5 h-[calc(100vh-90px)] flex flex-col justify-between items-center relative rounded-lg overflow-clip">
          <div className="absolute top-0 left-0 bg-[#FFFFFF] w-full p-2.5 rounded-lg flex justify-start items-center gap-3 sm:gap-4">
            <figure className="w-12 h-12 sm:w-[60px] sm:h-[60px] rounded-full overflow-clip">
              <img
                src="/supportChattingPageImages/modelImage.png"
                alt="/DriverImage"
              />
            </figure>
            <p className="text-sm sm:text-[16px]">Banedict Fring Dron online</p>
          </div>

          {/* Chatting messages */}
          <div className="h-full w-full overflow-y-scroll flex flex-col-reverse mt-[65px] sm:mt-[75px]">
            <Messages />
          </div>

          {/* Chat Input */}
          <div className="w-full mb-6 sm:mb-8 px-1 sm:px-0">
            <form onSubmit={handleMessage} className="relative w-full">
              <input
                type="text"
                className="bg-white w-full py-4 sm:py-5 rounded-4xl px-4 sm:px-5 focus:border-red-500 outline-none"
                name="message"
                placeholder="Type your message..."
              />
              <button
                type="submit"
                className="rotate-45 border-gray-400 absolute right-6 sm:right-10 top-3 sm:top-5 text-[#008CFF]"
              >
                <Send />
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SupportChatting;
