import { useState } from "react";

const Navbar = () => {
  const [showDropDown, setDropDown] = useState(false);
  const handleDropDown = () => {
    setDropDown(!showDropDown);
  };
  const user = {
    name: "Jane Cooper",
    profileImage: "/NavbarIcons/user.png",
  };
  const notification = [{ id: 1, notification: "Hello World" }];
  //   const notification = [];
  return (
    // <nav className="sticky w-full  mt-10 ">
    <nav className="mt-5 bg-[#FFFFFF] py-3 px-5 shadow  z-50">
      <div className="flex justify-between items-center     text-[#333333]">
        {/* Welcome Message */}
        <div>
          <h2 className="text-2xl font-medium">Welcome, {user?.name}</h2>
          <p className="text-[16px]">Have a nice day</p>
        </div>
        {/* Dropdown Option */}
        <div
          className="flex justify-center items-center gap-8"
          onClick={handleDropDown}
        >
          <figure className="relative">
            <img
              src="/NavbarIcons/notification.png"
              className="w-6 h-6"
              alt="Notification Icons"
            />
            {notification.length > 0 && (
              <div className="absolute -top-[3px] -right-[6px]  w-[18px] h-[18px] rounded-full bg-[#333333]  text-white flex justify-center items-center ">
                {/* <p className="text-[10px]">{notification.length}</p> */}
                <p className="text-[10px]">12</p>
              </div>
            )}
          </figure>
          <div className="flex justify-center items-center gap-2.5">
            {user?.profileImage && (
              <figure className="w-12 h-12 rounded-full overflow-clip">
                <img
                  src={user?.profileImage}
                  className="w-full h-full object-cover object-top"
                  alt="User Profile"
                />
              </figure>
            )}
            <p>{user?.name}</p>
            <figure>
              <img
                className={`${showDropDown ? "" : "rotate-180"}`}
                src="/NavbarIcons/dropDownArrow.png"
                alt="Drop Down Arrow"
              />
            </figure>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
