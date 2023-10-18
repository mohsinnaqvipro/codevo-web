"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";

import {
  NavBarContainer,
  LogoContianer,
  Nav,
  NavList,
  NavItem,
} from "./styles";
import LogoImage from "@/assets/images/logo.png";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <NavBarContainer>
      <div className="innerLayout">
        <LogoContianer>
          <Image src={LogoImage} alt="Your Logo" />
        </LogoContianer>
        <Nav>
          <div className="hamburger">
            <MenuIcon className="menu" onClick={toggleMenu} />
          </div>
          <NavList show={menuOpen ? "block" : "none"}>
            <NavItem>
              <Link href="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link href="/about">About Us</Link>
            </NavItem>
            <NavItem>
              <Link href="/services">Services</Link>
            </NavItem>
            <NavItem>
              <Link href="/portfolio">Portfolio</Link>
            </NavItem>
            <NavItem>
              <Link href="/blog">Blogs</Link>
            </NavItem>
            <NavItem>
              <Link className="contactUs" href="/contact">
                Contact Us
              </Link>
            </NavItem>
          </NavList>
        </Nav>
      </div>
    </NavBarContainer>
  );
};

export default NavBar;
