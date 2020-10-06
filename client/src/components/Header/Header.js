import React from "react";

const Header = ({ dark, children, className, total, data }) => {
  dark = !!dark ? "dark" : "light";
  return (
    <nav
      className={`navbar navbar-${dark}` + (className ? " " + className : "")}
    >
      <span className="navbar-brand">{children}</span>
    </nav>
  );
};

export default Header;
