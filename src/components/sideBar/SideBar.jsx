import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const navButtons = [
    {
      id: "1",
      button: "Dashboard",
      icon: "/DashboardIcons/dashboard.png",
    },
    {
      id: "2",
      button: "User",
      icon: "/DashboardIcons/user.png",
    },
    {
      id: "3",
      button: "Earning",
      icon: "/DashboardIcons/earning.png",
    },
    {
      id: "4",
      button: "Driver",
      icon: "/DashboardIcons/driver.png",
    },
    {
      id: "5",
      button: "Driver Request",
      icon: "/DashboardIcons/driver-request.png",
    },
    {
      id: "6",
      button: "Categories",
      icon: "/DashboardIcons/categories.png",
    },
    {
      id: "7",
      button: "Settings",
      icon: "/DashboardIcons/settings.png",
    },
    {
      id: "8",
      button: "Support",
      icon: "/DashboardIcons/support.png",
    },
  ];
  return (
    <aside className="w-[260px] bg-white/25 border-r flex flex-col justify-between items-center h-full px-5">
      <div className="mt-[34px] ">
        <img className="w-[200px]" src="Logo/Logo.png" alt="Logo" />
      </div>
      <div className="border py-2.5">
        <ul className="space-y-5">
          {navButtons?.map((navButton) => (
            <li key={navButton?.id}>
              <NavLink className="flex justify-start items-center gap-2.5 py-3 px-5 bg-gray-600">
                <figure className="w-6">
                  <img src={navButton?.icon} alt={navButton?.button} />
                </figure>
                <p>{navButton?.button}</p>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-5 w-1/2 border"></div>
    </aside>
  );
};

export default SideBar;
