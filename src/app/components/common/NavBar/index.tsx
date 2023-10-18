"use client";

import React from "react";

import { MainDiv } from "./styles";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";

const Nabar = () => {
  return (
    <MainDiv>
      <Image src={Logo} alt="" />
    </MainDiv>
  );
};

export default Nabar;
