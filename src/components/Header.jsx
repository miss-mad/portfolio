import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Menu } from "antd";

export default function Header() {
  const navigate = useNavigate();
  const handleNavBarChange = ({ key }) => {
    navigate(key);
  };

  const navBarItems = [
    {
      label: "AboutMe",
      key: "/",
    },
    {
      label: "Portfolio",
      key: "/portfolio",
    },
    {
      label: "Contact",
      key: "/contact",
    },
    {
      label: "Resume",
      key: "/resume",
    },
  ];

  return (
    <div className="container">
      <h1>Madeleine's Portfolio</h1>
      <nav>
        <Menu
          onClick={handleNavBarChange}
          items={navBarItems}
          mode="horizontal"
          defaultSelectedKeys={"/"}
        />
      </nav>
    </div>
  );
}
