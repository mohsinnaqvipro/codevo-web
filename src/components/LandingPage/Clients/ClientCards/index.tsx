"use client";
import React from "react";
import { ClientData } from "@/utils/Constants/constants";

import {
  MainContainer,
  InnerContainer,
  CardContainer,
  ImageContainer,
  StyledImage,
  HeadingText,
  IntroText,
} from "./styles";

const ClientCards = () => {
  return (
    <>
      <MainContainer>
        <InnerContainer>
          {ClientData.map((item, index) => (
            <CardContainer key={index}>
              <ImageContainer>
                <StyledImage src={item.imageUrl} alt=""></StyledImage>
                <HeadingText>{item.title}</HeadingText>
              </ImageContainer>
              <IntroText>{item.details}</IntroText>
            </CardContainer>
          ))}
        </InnerContainer>
      </MainContainer>
    </>
  );
};

export default ClientCards;
