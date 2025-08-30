import React from "react";
import SideBar from "../components/sideBar/SideBar";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const AdminLayout = () => {
  return (
    <main className=" w-dvw font-montserrat ">
      <section className="flex h-screen overflow-hidden w-full">
        {/*1 left sidebar */}
        <div className="hidden sm:block">
          <SideBar></SideBar>
        </div>
        {/* 2 right site content */}
        <div className="w-full px-5 overflow-y-scroll bg-[#F2F5F7] mb-5 ">
          <Navbar></Navbar>
          <Outlet></Outlet>
        </div>
      </section>
    </main>
  );
};

export default AdminLayout;
