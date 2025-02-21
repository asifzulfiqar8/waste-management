import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="bg-white h-[calc(100vh-185px)] rounded-2xl p-5 ">
      <Outlet />
    </div>
  );
};

export default Main;
