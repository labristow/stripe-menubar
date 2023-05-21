import React from "react";
import NavbarStyle from "./Navbar.module.css";

const NavDropdown = React.forwardRef<HTMLDivElement, { children: JSX.Element }>(
  ({ children }, ref) => {
    return (
      <div ref={ref} className={`nav-dropdown ${NavbarStyle.nav_dropdown}`}>
        {children}
      </div>
    );
  }
);

export default NavDropdown;
