"use client";
import React, { useEffect, useLayoutEffect } from "react";
import Login from "@/components/Login";
import MyContext from "@/context/Context";
import { useContext } from "react";
import AdminNav from "@/components/AdminNav";
import { MdInventory } from "react-icons/md";
import { MdLibraryAdd } from "react-icons/md";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
const page = () => {
  const { setRoute } = useContext(MyContext);
  useLayoutEffect(() => {
    setRoute("/Admin");
  }, []);
  return (
    <div className="flex flex-col items-center gap-10 bg-gray-50 h-screen">
      <AdminNav />
      <div className="mt-32 w-full md:w-2/5 flex flex-col items-center p-5 gap-8">
        <button className="border flex justify-between items-center px-6 sm:px-16 rounded-md hover:scale-105 transition-transform py-3 w-2/3">
          View All Products
          <MdInventory className="text-xl" />
        </button>
        <button className="border flex justify-between items-center px-6 sm:px-16 rounded-md hover:scale-105 transition-transform py-3  w-2/3">
          Add Products
          <MdLibraryAdd className="text-xl" />
        </button>
        <button className="border flex justify-between items-center px-6 sm:px-16 rounded-md hover:scale-105 transition-transform py-3 w-2/3">
          Main Product
          <MdOutlineFeaturedPlayList className="text-xl" />
        </button>
        <button className="border flex justify-between items-center px-6 sm:px-16 rounded-md hover:scale-105 transition-transform py-3 w-2/3">
          Featured Products
          <MdOutlineFeaturedPlayList className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default page;
