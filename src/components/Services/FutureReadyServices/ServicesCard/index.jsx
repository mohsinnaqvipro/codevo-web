import React from "react";
import ServicesCardImg from "@/assets/images/ServicesCardImg.png";

import {
  InnerLayout,
  MainLayout,
  ImageHolder,
  StyledImage,
  CardTitle,
  CardDiscription,
  DiscriptionWrapper,
} from "./styles";
const ServicesCard = ({ title, url, details }) => {
  return (
    <>
      <MainLayout>
        <InnerLayout>
          <ImageHolder>
            <StyledImage src={url} alt="" />
            <CardTitle>{title}</CardTitle>
          </ImageHolder>
          <DiscriptionWrapper>
            <CardDiscription>{details}</CardDiscription>
          </DiscriptionWrapper>
        </InnerLayout>
      </MainLayout>
    </>
  );
};

export default ServicesCard;
