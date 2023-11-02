"use client";

import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import { NavItems } from "@/utils/Constants/constants";
import MenuIcon from "@mui/icons-material/Menu";
import { usePathname, useRouter } from "next/navigation";

import {
  MainLayout,
  InnerLayout,
  ImageHolder,
  NavContainer,
  StyledLink,
  StyledButton,
  IconContainer,
} from "./styles";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathName = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <MainLayout>
      <InnerLayout>
        <ImageHolder>
          <Image src={Logo} alt="" priority={true} />
        </ImageHolder>
        <NavContainer>
          {NavItems.map((item, index) => (
            <StyledLink
              key={index}
              href={item.url}
              active={pathName === item.url}
            >
              {item.label}
            </StyledLink>
          ))}
          <StyledButton
            variant="contained"
            onClick={() => router.push("/contactus")}
          >{`Contact Us`}</StyledButton>
        </NavContainer>
        <IconContainer onClick={toggleMenu}>
          <MenuIcon />
        </IconContainer>
      </InnerLayout>
    </MainLayout>
  );
};

export default NavBar;
