import { useState } from "react";
import SideBar from "../components/sideBar/SideBar";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const AdminLayout = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleLayout = () => {
    setIsNavbarOpen((prev) => !prev);
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <main className=" w-dvw font-montserrat ">
      <section className="flex h-screen overflow-hidden w-full">
        {/*1 left sidebar */}
        {/* <div className="hidden sm:block"> */}
        <div className="">
          <SideBar isOpen={isSidebarOpen} onToggle={toggleLayout}></SideBar>
        </div>
        {/* 2 right site content */}
        <div className="w-full  px-5 overflow-y-scroll bg-[#F2F5F7] pb-16 pt-28 lg:pt-0 ">
          <Navbar isOpen={isNavbarOpen} onToggle={toggleLayout}></Navbar>
          <Outlet></Outlet>
        </div>
      </section>
    </main>
  );
};

export default AdminLayout;
