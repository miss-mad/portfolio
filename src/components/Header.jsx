import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Header({ currentPage, handleNavBarChange }) {
  // const navBarItems = [
  //   {
  //     label: "AboutMe",
  //     key: "/",
  //   },
  //   {
  //     label: "Portfolio",
  //     key: "/portfolio",
  //   },
  //   {
  //     label: "Contact",
  //     key: "/contact",
  //   },
  //   {
  //     label: "Resume",
  //     key: "/resume",
  //   },
  // ];

  // const navigate = useNavigate();

  // const handleNavBarChangeAgain = ({ key }) => {
  //   navigate(key);
  // };

  return (
    <div className="container">
      <h1>Madeleine's Portfolio</h1>
      {/* <NavBar
        currentPage={currentPage}
        handleNavBarChange={handleNavBarChangeAgain}
      /> */}
      <nav>
        <Link to="/">About Me</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/resume">Resume</Link>
        <Outlet />
      </nav>
    </div>
  );
}
