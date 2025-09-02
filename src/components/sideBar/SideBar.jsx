import React from "react";
import { Link, NavLink } from "react-router-dom";

const SideBar = () => {
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
  return (
    <aside
      className="w-[260px] bg-[#FFFFFF]  flex flex-col justify-between items-center h-dvh px-2 pt-7.5"
      // style={{ boxShadow: "4px 0 10px rgba(166, 194, 179, 1)" }}
    >
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
                  `flex justify-start items-center gap-2.5 py-3 px-5  ${
                    isActive
                      ? "rounded-4xl bg-black text-white"
                      : "bg-white text-black"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <figure className="w-6">
                      <img
                        src={isActive ? navButton?.activeIcon : navButton?.icon}
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
  );
};

export default SideBar;
