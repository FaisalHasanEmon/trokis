// import { Menu } from "lucide-react";
// import { useState } from "react";

// const Navbar = ({ isOpen, onToggle }) => {
//   const [showDropDown, setDropDown] = useState(false);
//   const handleDropDown = () => setDropDown(!showDropDown);

//   const user = {
//     name: "Jane Cooper",
//     profileImage: "/NavbarIcons/user.png",
//   };

//   const notification = [{ id: 1, notification: "Hello World" }];

//   return (
//     <>
//       {isOpen && (
//         <nav className="mt-0 lg:mt-5 fixed left-0 top-0 lg:block bg-white py-3 px-5 shadow z-50 lg:relative w-full">
//           <div className="flex justify-between items-center text-[#333333]">
//             {/* Welcome Message */}
//             <div className="lg:hidden">
//               <button onClick={onToggle}>
//                 <Menu></Menu>
//               </button>
//             </div>
//             <div className="hidden lg:block">
//               <h2 className="text-xl md:text-2xl font-medium">
//                 Welcome, {user?.name}
//               </h2>
//               <p className="text-sm md:text-base">Have a nice day</p>
//             </div>

//             {/* Right Section */}
//             <div className="flex items-center gap-4 md:gap-8">
//               {/* Notification Icon */}
//               <figure className="relative">
//                 <img
//                   src="/NavbarIcons/notification.png"
//                   className="w-5 h-5 md:w-6 md:h-6"
//                   alt="Notification Icons"
//                 />
//                 {notification.length > 0 && (
//                   <div className="absolute -top-1 -right-1 w-4 h-4 md:w-[18px] md:h-[18px] rounded-full bg-[#333333] text-white flex justify-center items-center">
//                     <p className="text-[10px] md:text-[10px]">12</p>
//                   </div>
//                 )}
//               </figure>

//               {/* Profile Section */}
//               <div
//                 className="flex items-center gap-2 cursor-pointer"
//                 onClick={handleDropDown}
//               >
//                 {user?.profileImage && (
//                   <figure className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-clip">
//                     <img
//                       src={user?.profileImage}
//                       className="w-full h-full object-cover object-top"
//                       alt="User Profile"
//                     />
//                   </figure>
//                 )}
//                 <p className="hidden sm:block text-sm md:text-base">
//                   {user?.name}
//                 </p>
//                 <figure>
//                   <img
//                     className={`${
//                       showDropDown ? "rotate-180" : ""
//                     } transition-transform`}
//                     src="/NavbarIcons/dropDownArrow.png"
//                     alt="Drop Down Arrow"
//                   />
//                 </figure>
//               </div>
//             </div>
//           </div>

//           {/* Dropdown Menu */}
//           {showDropDown && (
//             <div className="absolute right-0 mt-5 w-48 bg-white border rounded-lg shadow-lg shadow-gray-500 p-4 ">
//               <ul className="space-y-2 text-sm">
//                 <li className="hover:bg-gray-100 px-3 py-2 rounded">Option</li>
//                 <li className="hover:bg-gray-100 px-3 py-2 rounded">Option</li>
//                 <li className="hover:bg-gray-100 px-3 py-2 rounded">Option</li>
//               </ul>
//             </div>
//           )}
//         </nav>
//       )}
//     </>
//   );
// };

// export default Navbar;

import { Menu } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const Navbar = ({ isOpen, onToggle }) => {
  const [showDropDown, setDropDown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

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
        !notificationRef.current.contains(event.target) // NOT scrolling inside dropdown
      ) {
        setShowNotifications(false);
      }
    };

    window.addEventListener("click", handleOutsideClick);
    window.addEventListener("scroll", handleScroll, true); // Use capture phase to detect scroll in any element

    return () => {
      window.removeEventListener("click", handleOutsideClick);
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [showNotifications]);

  return (
    <>
      {isOpen && (
        <nav className="mt-0 lg:mt-5  fixed left-0 top-0 lg:block bg-white shadow-sm py-3 px-5  z-50 lg:relative w-full rounded-lg">
          <div className="flex justify-between items-center text-[#333333]">
            {/* Welcome Message */}
            <div className="lg:hidden">
              <button onClick={onToggle}>
                <Menu />
              </button>
            </div>
            <div className="hidden lg:block">
              <h2 className="text-xl md:text-2xl font-medium">
                Welcome, {user?.name}
              </h2>
              <p className="text-sm md:text-base">Have a nice day</p>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4 md:gap-8">
              {/* Notification Icon */}
              <div className="relative">
                <button ref={notificationBtnRef} onClick={handleNotification}>
                  <img
                    src="/NavbarIcons/notification.png"
                    className="w-5 h-5 md:w-6 md:h-6"
                    alt="Notification Icon"
                  />
                  {notifications.length > 0 && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 md:w-[18px] md:h-[18px] rounded-full bg-[#333333] text-white flex justify-center items-center">
                      <p className="text-[10px] md:text-[10px]">
                        {notifications.length}
                      </p>
                    </div>
                  )}
                </button>

                {/* Notifications Dropdown */}
                {showNotifications && (
                  <div
                    ref={notificationRef}
                    className="absolute right-0 mt-3 w-80 max-h-96 overflow-y-auto bg-white border rounded-lg shadow-lg shadow-gray-500 z-50"
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
                          <h4 className="text-sm font-semibold">
                            {item.title}
                          </h4>
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
                  <figure className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-clip">
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
      )}
    </>
  );
};

export default Navbar;
