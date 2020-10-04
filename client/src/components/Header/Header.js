import React, { Component } from "react";
export const Header = ({ dark, children, className }) => {
  dark = !!dark ? "dark" : "light";
  return (
    <nav
      className={
        `navbar navbar-${dark} bg-${dark}` + (className ? " " + className : "")
      }
    >
      <span className="navbar-brand">{children}</span>
    </nav>
  );
};
export default Header;
