import React from "react";

const Navbar = () => {
  const user = {
    name: "Jane Cooper",
  };
  return (
    <nav className="fixed  mt-10 top-0 left-[250px] w-[calc(100%-250px)] mr-10">
      <div className="flex justify-between items-center  bg-amber-400">
        {/* Welcome Message */}
        <div>
          <h2>Welcome, {user?.name}</h2>
        </div>
        {/* Dropdown Option */}
        <div>
          <p>Hello World</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
