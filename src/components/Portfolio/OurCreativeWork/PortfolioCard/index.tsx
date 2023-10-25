import React from "react";
import { PortfolioCardData } from "@/utils/Constants/porfolioConstants";
import PortfolioCardScroll from "@/assets/images/PortfolioCardScroll.png";
import {
  MainLayout,
  ImageHolder,
  StyledImage,
  CardDetails,
  CardDiscription,
  CardTitle,
  ButtonWrapper,
  StyledButton,
  InnerLayout,
  ScrollWrapper,
} from "./styles";

const PortfolioCard = () => {
  return (
    <MainLayout>
      <ImageHolder>
        {PortfolioCardData.map((item, index) => (
          <InnerLayout key={index}>
            <StyledImage src={item.imageUrl} alt="" />
            <CardDetails>
              <CardTitle>{item.title}</CardTitle>
              <CardDiscription>{item.dicription}</CardDiscription>
            </CardDetails>
            <ButtonWrapper>
              <StyledButton>{`View Details`}</StyledButton>
            </ButtonWrapper>
          </InnerLayout>
        ))}
      </ImageHolder>
      <ScrollWrapper>
        <StyledImage src={PortfolioCardScroll} alt="" />
      </ScrollWrapper>
    </MainLayout>
  );
};

export default PortfolioCard;
