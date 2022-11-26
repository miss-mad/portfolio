import React from "react";

export default function NavBar({ currentPage, handleNavBarChange }) {
  return (
    <ul className="nav nav-pills">
      <div>This is NavBar</div>
      <li>
        <a
          href="#aboutme"
          onClick={() => {
            handleNavBarChange("AboutMe");
          }}
          // insert different styling for if this tab is active
          className={currentPage === "AboutMe" ? "nav-link active" : "nav-link"}
        >
          About Me
        </a>
      </li>
      <li>
        <a
          href="#portfolio"
          onClick={() => {
            handleNavBarChange("Portfolio");
          }}
          // insert different styling for if this tab is active
          className={
            currentPage === "Portfolio" ? "nav-link active" : "nav-link"
          }
        >
          Portfolio
        </a>
      </li>
      <li>
        <a
          href="#contact"
          onClick={() => {
            handleNavBarChange("Contact");
          }}
          // insert different styling for if this tab is active
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
      <li>
        <a
          href="#resume"
          onClick={() => {
            handleNavBarChange("Resume");
          }}
          // insert different styling for if this tab is active
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}
