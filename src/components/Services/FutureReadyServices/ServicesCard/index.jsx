import React from "react";

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
            <StyledImage src={url} alt="A" />
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
