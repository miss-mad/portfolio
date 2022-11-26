import React from "react";
import NavBar from "./NavBar";


export default function Header({ currentPage, handleNavBarChange }) {
  return (
    <div>
      This is Header
      <h1>My name is Madeleine and welcome to my Portfolio</h1>
      <NavBar
        currentPage={currentPage}
        handleNavBarChange={handleNavBarChange}
      />
    </div>
  );
}
