"user client";

import CeoImage from "@/assets/images/img-2.png";

import {
  MainLayout,
  InnerLayout,
  LeftConatiner,
  ImageContainer,
  StyledImage,
  CeoName,
  StyledDivider,
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
            <CeoName>{`CEO, M. Hamza`}</CeoName>
            <CeoDestination>{`CEO, CodeVo Technologies`}</CeoDestination>
          </LeftConatiner>
          <StyledDivider orientation="vertical" />
          <LeftConatiner>
            <ImageContainer>
              <StyledImage src={CeoImage} alt=""></StyledImage>
            </ImageContainer>
            <CeoName>{`CTO, Mohsin Naqvi`}</CeoName>
            <CeoDestination>{`CTO, CodeVo Technologies`}</CeoDestination>
          </LeftConatiner>
        </InnerLayout>
      </MainLayout>
    </>
  );
};

export default Ceo;
