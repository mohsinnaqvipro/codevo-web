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

const PortfolioCard = ({ item }: any) => {
  return (
    <>
      <MainLayout>
        <InnerLayout>
          <div>
            <CardHolder>
              <ImageHolder>
                <StyledImage src={item.imageUrl} alt="" />
              </ImageHolder>
              <DetailContainer>
                <TitleHanding>{item.title}</TitleHanding>
                <CardText>{item.dicription}</CardText>
                <StyledButton
                  variant="contained"
                  size="small"
                >{`View Details`}</StyledButton>
              </DetailContainer>
            </CardHolder>
          </div>
        </InnerLayout>
      </MainLayout>
    </>
  );
};

export default PortfolioCard;
