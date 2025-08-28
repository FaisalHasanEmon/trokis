import React from "react";
import SideBar from "../components/sideBar/SideBar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <main className=" w-full font-montserrat relative">
      <section className="flex h-screen relative overflow-hidden w-full">
        {/*1 left sidebar */}
        <SideBar></SideBar>
        {/* 2 right site content */}
        <div className="w-full  px-5 overflow-y-scroll">
          <Outlet></Outlet>
        </div>
      </section>
    </main>
  );
};

export default AdminLayout;
