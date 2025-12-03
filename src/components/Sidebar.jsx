import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ open }) => {
  const navigate = useNavigate();

  return (
    <div className={open ? "sidebar open" : "sidebar"}>
      <ul>
        <li onClick={() => navigate("/profile")}>Profile View</li>
        <li onClick={() => navigate("/editprofile")}>Profile Edit</li>
        <li onClick={() => navigate("/connections")}>Connections</li>
        <li onClick={() => navigate("/requests")}>Requests</li>
      </ul>
    </div>
  );
};

export default Sidebar;
