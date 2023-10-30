"use client";

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
        <>
          <InnerLayout key={index}>
            <CricleDiv>
              <NumberSpan>{item.sirNo}</NumberSpan>
            </CricleDiv>
            <CardHanding>{item.title} </CardHanding>
            <CardText>{item.details}</CardText>
          </InnerLayout>
          <ImageContainer>
            <StyledImage src={item.arrow} alt=""></StyledImage>
          </ImageContainer>
        </>
      ))}
    </MainLayout>
  );
};

export default WorkCard;
