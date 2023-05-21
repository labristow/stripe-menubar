import React, { useEffect, useRef, useState } from "react";
import NavbarStyle from "./Navbar.module.css";
import stripeLogo from "../../assets/stripe-logo.svg";
import NavDropdown from "./NavDropdown";
import { gsap } from "gsap";
import ProductMenu from "./navmenu-content/ProductMenu";
import SolutionMenu from "./navmenu-content/SolutionMenu";
import DeveloperMenu from "./navmenu-content/DeveloperMenu";
import ResourceMenu from "./navmenu-content/ResourceMenu";

const menuList = [
  { name: "Products" },
  { name: "Solutions" },
  { name: "Developers" },
  { name: "Resources" },
  { name: "Pricing" },
];
function Navbar() {
  const menuRef = useRef<any>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [dropdownDimensions] = useState([
    { w: 400, h: 340 },
    { w: 320, h: 400 },
    { w: 300, h: 300 },
    { w: 400, h: 320 },
  ]);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const dropdownAnimateOut = () => {
    const tl = gsap.timeline();
    if (dropdownRef.current) {
      tl.to(dropdownRef.current, {
        delay: 0.2,
        width: 0,
        height: 0,
        duration: 0,
      });
    }
  };

  const dropdownAnimate = (id: number) => {
    setCurrentIndex(id);
    let padLeft = 0;
    if (id !== 4) {
      Array(4)
        .fill("")
        .forEach((_, index) => {
          if (id > index) {
            padLeft = padLeft + menuRef.current[index].clientWidth;
          } else if (id === index) {
            padLeft = padLeft + menuRef.current[index].clientWidth / 2;
          }
        });
      const tl = gsap.timeline();
      if (dropdownRef.current) {
        tl.to(dropdownRef.current, {
          width: dropdownDimensions[id].w,
          height: dropdownDimensions[id].h,
          x: padLeft,
          duration: 0.35,
        });
      }
    }
  };

  return (
    <nav className={NavbarStyle.navbar}>
      <div className={NavbarStyle.nav__inner}>
        <a href="">
          <img src={stripeLogo} alt="stripe__logo" />
        </a>

        <ul
          className={NavbarStyle.nav_menu_list}
          onMouseLeave={dropdownAnimateOut}
        >
          {currentIndex >= -1 && currentIndex < 4 && (
            <div>
              <NavDropdown ref={dropdownRef}>
                <React.Fragment>
                  {currentIndex === 0 && <ProductMenu />}
                  {currentIndex === 1 && <SolutionMenu />}
                  {currentIndex === 2 && <DeveloperMenu />}
                  {currentIndex === 3 && <ResourceMenu />}
                </React.Fragment>
              </NavDropdown>
            </div>
          )}
          {menuList.map(({ name }, index) => (
            <a
              onMouseOver={() => index <= 4 && dropdownAnimate(index)}
              ref={(menu) => (menuRef.current[index] = menu)}
              href=""
              key={index}
              className={`${index < 4 && "nav-item"}`}
            >
              <li>{name}</li>
            </a>
          ))}
        </ul>
        <button className="">sign in</button>
      </div>
    </nav>
  );
}

export default Navbar;
