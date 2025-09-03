import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = ({ isOpen, onToggle }) => {
  const [showDropDown, setDropDown] = useState(false);
  const handleDropDown = () => setDropDown(!showDropDown);

  const user = {
    name: "Jane Cooper",
    profileImage: "/NavbarIcons/user.png",
  };

  const notification = [{ id: 1, notification: "Hello World" }];

  return (
    <>
      {isOpen && (
        <nav className="mt-0 lg:mt-5 fixed left-0 top-0 lg:block bg-white py-3 px-5 shadow z-50 lg:relative w-full">
          <div className="flex justify-between items-center text-[#333333]">
            {/* Welcome Message */}
            <div className="lg:hidden">
              <button onClick={onToggle}>
                <Menu></Menu>
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
              <figure className="relative">
                <img
                  src="/NavbarIcons/notification.png"
                  className="w-5 h-5 md:w-6 md:h-6"
                  alt="Notification Icons"
                />
                {notification.length > 0 && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 md:w-[18px] md:h-[18px] rounded-full bg-[#333333] text-white flex justify-center items-center">
                    <p className="text-[10px] md:text-[10px]">12</p>
                  </div>
                )}
              </figure>

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
            <div className="absolute right-0 mt-5 w-48 bg-white border rounded-lg shadow-lg shadow-gray-500 p-4 ">
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
