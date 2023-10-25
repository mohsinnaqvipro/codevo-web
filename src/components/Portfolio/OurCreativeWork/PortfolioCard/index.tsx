import React from "react";
import { PortfolioCardData } from "@/utils/Constants/porfolioConstants";
import PortfolioCardImage1 from "@/assets/images/PortfolioCardImage1.png";
import Carousel from "react-material-ui-carousel";

import {
  MainLayout,
  InnerLayout,
  CardHolder,
  ImageHolder,
  StyledImage,
  DetailContainer,
  TitleHanding,
  CardText,
  StyledButton,
} from "./styles";

const PortfolioCard = ({ items }: any) => {
  return (
    <>
      <MainLayout>
        <InnerLayout>
          {PortfolioCardData.map((item, index) => (
            <>
              <CardHolder key={index}>
                <ImageHolder>
                  <StyledImage src={item.data.imageUrl} alt="" />
                </ImageHolder>
                <DetailContainer>
                  <TitleHanding>{item.data.title}</TitleHanding>
                  <CardText>{item.data.dicription}</CardText>
                  <StyledButton
                    variant="contained"
                    size="small"
                  >{`View Details`}</StyledButton>
                </DetailContainer>
              </CardHolder>
            </>
          ))}
        </InnerLayout>
      </MainLayout>
    </>
  );
};

export default PortfolioCard;
