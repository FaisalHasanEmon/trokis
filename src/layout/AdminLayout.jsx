import React from "react";
import SideBar from "../components/sideBar/SideBar";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const AdminLayout = () => {
  return (
    <main className=" w-full font-montserrat ">
      <section className="flex h-screen overflow-hidden w-full">
        {/*1 left sidebar */}
        <SideBar></SideBar>
        {/* 2 right site content */}
        <div className="w-dvw px-5 overflow-y-scroll bg-[#F2F5F7] border relative">
          <Navbar></Navbar>
          <Outlet></Outlet>
        </div>
      </section>
    </main>
  );
};

export default AdminLayout;
