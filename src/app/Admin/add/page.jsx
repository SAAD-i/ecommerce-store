"use client";
import React from "react";
import { useEffect } from "react";
import MyContext from "@/context/Context";
import { useContext } from "react";
import AdminNav from "@/components/AdminNav";
const page = () => {
  const { setRoute } = useContext(MyContext);
  useEffect(() => {
    setRoute("/Admin/add");
  }, []);
  return (
    <div className="flex flex-col items-center gap-10 bg-gray-50 h-screen">
      <AdminNav />
      <div></div>
    </div>
  );
};

export default page;
