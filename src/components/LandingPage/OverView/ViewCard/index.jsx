"use client";

import EastIcon from "@mui/icons-material/East";

import {
  ViewContainer,
  SpanContainer,
  ViewSpan,
  DividerBlue,
  DividerContainer,
  DividerGrey,
  TextContainer,
  HadingSpan,
  ViewText,
  ButtonContainer,
  StyleButton,
  ImageContainer,
  StyledImage,
} from "./styles";

const ViewCard = (data) => {
  const { srNo, title, details } = data;

  return (
    <>
      <ViewContainer>
        <SpanContainer>
          <ViewSpan>{srNo}</ViewSpan>
        </SpanContainer>
        <DividerContainer>
          <DividerBlue></DividerBlue>
          <DividerGrey></DividerGrey>
        </DividerContainer>
        <TextContainer>
          <ViewText>
            <HadingSpan>{title}</HadingSpan>
            {details}
          </ViewText>
        </TextContainer>
        <ButtonContainer>
          <StyleButton
            variant="contained"
            endIcon={<EastIcon />}
          >{`Explore More`}</StyleButton>
        </ButtonContainer>
      </ViewContainer>
    </>
  );
};

export default ViewCard;
