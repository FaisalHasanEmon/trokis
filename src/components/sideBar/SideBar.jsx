import { PanelRightClose } from "lucide-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const SideBar = ({ isOpen, onToggle }) => {
  const navButtons = [
    {
      id: "1",
      button: "Dashboard",
      icon: "/DashboardIcons/dashboard.png",
      activeIcon: "/DashboardIcons/dashboard-active.png",
      link: "/",
    },
    {
      id: "2",
      button: "User",
      icon: "/DashboardIcons/user.png",
      activeIcon: "/DashboardIcons/user-active.png",
      link: "/user",
    },
    {
      id: "3",
      button: "Earning",
      icon: "/DashboardIcons/earning.png",
      activeIcon: "/DashboardIcons/earning-active.png",
      link: "/earning",
    },
    {
      id: "4",
      button: "Driver",
      icon: "/DashboardIcons/driver.png",
      activeIcon: "/DashboardIcons/driver-active.png",
      link: "/driver",
    },
    {
      id: "5",
      button: "Driver Request",
      icon: "/DashboardIcons/driver-request.png",
      activeIcon: "/DashboardIcons/driver-request-active.png",
      link: "/driver-request",
    },
    {
      id: "6",
      button: "Categories",
      icon: "/DashboardIcons/categories.png",
      activeIcon: "/DashboardIcons/categories-active.png",
      link: "/categories",
    },

    {
      id: "7",
      button: "Support",
      icon: "/DashboardIcons/support.png",
      activeIcon: "/DashboardIcons/support-active.png",
      link: "/support",
    },
    {
      id: "8",
      button: "Settings",
      icon: "/DashboardIcons/settings.png",
      activeIcon: "/DashboardIcons/settings-active.png",
      link: "/settings",
    },
  ];
  // console.log(isOpen);
  return (
    <>
      {/* For laptop and desktop devices */}
      <section className="hidden lg:block">
        <aside className=" w-[260px] bg-[#FFFFFF] shadow-sm flex flex-col justify-between items-center h-dvh px-2 pt-7.5">
          {/* Logo */}
          <div>
            <Link to="/">
              <img className="w-full" src="/Logo/Logo.png" alt="Logo" />
            </Link>
          </div>
          {/* Navigating Buttons */}
          <div className=" py-2.5 ">
            <ul className="space-y-3">
              {navButtons?.map((navButton) => (
                <li key={navButton?.id}>
                  <NavLink
                    to={navButton?.link}
                    className={({ isActive }) =>
                      `flex justify-start items-center gap-2.5 py-3 px-5 hover:border-white hover:shadow-[0px_0px_8px_0px_rgba(0,0,0,0.1)]  hover:rounded-4xl hover:backdrop-blur-md rounded-4xl${
                        isActive
                          ? " bg-black text-white "
                          : "bg-white text-black "
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <figure className="w-6">
                          <img
                            src={
                              isActive ? navButton?.activeIcon : navButton?.icon
                            }
                            className={`w-full object-cover text-white`}
                            alt={navButton?.button}
                          />
                        </figure>
                        <p className="text-lg">{navButton?.button}</p>
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* Logout Button */}
          <div className="  w-full mt-[10px] mb-[62px] px-5 ">
            <button className="gap-2.5 py-3 cursor-pointer rounded-4xl  bg-[#F70300] hover:bg-red-500 text-white flex justify-center items-center w-full">
              <figure className="w-6">
                <img
                  src="/DashboardIcons/logout.png"
                  className="w-full object-cover"
                  alt="Logout Icon"
                />
              </figure>
              <p>Logout</p>
            </button>
          </div>
        </aside>
      </section>
      {/* For mobile and tabs */}
      {isOpen && (
        <section className="  fixed h-full w-full overflow-clip bg-black/40 z-50">
          <aside className="w-[260px] bg-[#FFFFFF]  flex flex-col justify-between items-center h-dvh px-2 pt-7.5 z-50">
            {/* Logo */}
            <div className="z-35 flex justify-between items-center relative">
              <Link to="/">
                <img className="w-[80%]" src="/Logo/Logo.png" alt="Logo" />
              </Link>
              <button className="text-red-700" onClick={onToggle}>
                <PanelRightClose
                  size={24}
                  className="rotate-180"
                ></PanelRightClose>
              </button>
            </div>
            {/* Navigating Buttons */}
            <div className=" py-2.5 ">
              <ul className="space-y-3">
                {navButtons?.map((navButton) => (
                  <li key={navButton?.id} className="">
                    <NavLink
                      to={navButton?.link}
                      onClick={onToggle}
                      className={({ isActive }) =>
                        `flex justify-start items-center gap-2.5 py-3 px-5  ${
                          isActive
                            ? "rounded-4xl bg-black text-white"
                            : "bg-white  text-black hover:shadow-sm"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <figure className="w-6">
                            <img
                              src={
                                isActive
                                  ? navButton?.activeIcon
                                  : navButton?.icon
                              }
                              className={`w-full object-cover text-white`}
                              alt={navButton?.button}
                            />
                          </figure>
                          <p className="text-lg">{navButton?.button}</p>
                        </>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/* Logout Button */}
            <div className="  w-full mt-[10px] mb-[62px] px-5 ">
              <button className="gap-2.5 py-3 cursor-pointer rounded-4xl  bg-[#F70300] hover:bg-red-500 text-white flex justify-center items-center w-full">
                <figure className="w-6">
                  <img
                    src="/DashboardIcons/logout.png"
                    className="w-full object-cover"
                    alt="Logout Icon"
                  />
                </figure>
                <p>Logout</p>
              </button>
            </div>
          </aside>
        </section>
      )}
    </>
  );
};

export default SideBar;
