"use client";
import React from "react";

import { workData } from "@/utils/Constants/constants";

import {
  MainLayout,
  InnerLayout,
  CricleDiv,
  NumberSpan,
  CardHanding,
  CardText,
  ImageContainer,
  StyledImage,
} from "./styles";

const WorkCard = () => {
  return (
    <MainLayout>
      {workData.map((item, index) => (
        <React.Fragment key={index}>
          <InnerLayout>
            <CricleDiv>
              <NumberSpan>{item.sirNo}</NumberSpan>
            </CricleDiv>
            <CardHanding>{item.title} </CardHanding>
            <CardText>{item.details}</CardText>
          </InnerLayout>
          <ImageContainer>
            <StyledImage src={item.arrow} alt=""></StyledImage>
          </ImageContainer>
        </React.Fragment>
      ))}
    </MainLayout>
  );
};

export default WorkCard;
