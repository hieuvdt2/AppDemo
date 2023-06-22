import React from "react";
import { SidebarData } from "../utils/data/SidebarData";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="flex items-center flex-row space-x-2 lg:space-x-0 lg:flex-col lg:space-y-2 border-r-4 border-black-500 ">
        {SidebarData?.map((o) => (
          <div
            key={o.path}
            className="text-black/50 p-4 inline-flex justify-center rounded-md "
          >
            <NavLink
              to={o.path}
              className={({ isActive }) =>
                isActive ? "text-green-400 font-semibold underline" : ""
              }
            >
              <span>{o.title}</span>
            </NavLink>
          </div>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
