"use client";

import React from "react";

import { ImageContent } from "@/utils/Constants/constants";

import {
  MainContainer,
  HeaderText,
  ImageContainer,
  StyledImage,
} from "./styles";

const TrustedClients = () => {
  return (
    <>
      <MainContainer>
        <HeaderText>{`Some of our trusted clients`}</HeaderText>
        <ImageContainer>
          {ImageContent.map((item, index) => (
            <StyledImage key={index} src={item.imageUrl} alt="" />
          ))}
        </ImageContainer>
      </MainContainer>
    </>
  );
};

export default TrustedClients;
