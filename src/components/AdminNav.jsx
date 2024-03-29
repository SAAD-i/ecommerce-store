import React from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
const AdminNav = () => {
  return (
    <div
      className={`w-full px-3 py-4 md:px-8 lg:px-12 xl:px-16 font-sans flex justify-between items-center border-b-2 border-gray-200 `}
    >
      <div className="text-xl sm:text-3xl hover:cursor-pointer font-bold text-green-700  w-1/3">
        IKhan<span className="text-black">Bazaar</span>
      </div>
      <h1 className="text-xl sm:text-3xl font-bold text-center w-1/3">
        Welcome Admin
      </h1>
      <div className="w-1/3 flex justify-end">
        <IoPersonCircleOutline className="sm:text-5xl text-3xl cursor-pointer" />
      </div>
    </div>
  );
};

export default AdminNav;
