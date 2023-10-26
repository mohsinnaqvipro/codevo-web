"user client";

import CeoImage from "@/assets/images/img-2.png";

import {
  MainLayout,
  InnerLayout,
  LeftConatiner,
  ImageContainer,
  StyledImage,
  CeoDetails,
  CeoHeading,
  CeoText,
  CeoName,
  CeoDestination,
} from "./styles";

const Ceo = () => {
  return (
    <>
      <MainLayout>
        <InnerLayout>
          <LeftConatiner>
            <ImageContainer>
              <StyledImage src={CeoImage} alt=""></StyledImage>
            </ImageContainer>
          </LeftConatiner>
          <CeoDetails>
            <CeoHeading>{`Strive the Change`}</CeoHeading>
            <CeoText>{`We aim to achieve the highest standard of building software solutions across the globe through user-focused efforts. We are moving steadily towards being a world-leading custom software company because we believe that the future belongs to those who see the possibilities before they become obvious. To help businesses realize their full potential, we stay consistent & relevant to our client's business goals.`}</CeoText>
            <CeoName>{`CEO, Name`}</CeoName>
            <CeoDestination>{`CEO, CodeVo Technologies`}</CeoDestination>
          </CeoDetails>
        </InnerLayout>
      </MainLayout>
    </>
  );
};

export default Ceo;
