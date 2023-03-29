import React from "react";
import { Outlet } from "react-router-dom";
export default function DashLayout() {
  return (
    <>
      <div className="dash-container">
        <Outlet />
      </div>
    </>
  );
}
