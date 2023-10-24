"use client";

import ViewCard from "./ViewCard";
import ViewImage from "@/assets/images/Idea1.png";
import ViewImage1 from "@/assets/images/Idea2.png";
import ViewImage2 from "@/assets/images/ideaimage0.png";
import { OverViewData } from "@/utils/Constants/constants";
import {
  MainLayout,
  InnerLayout,
  ViewHeading,
  ViewSpan,
  CardLayout,
  ImageContainer,
  StyledImage,
} from "./styles";

const OverView = () => {
  return (
    <>
      <MainLayout>
        <InnerLayout>
          <ViewHeading>
            We Specialize in
            <ViewSpan> Transforming Your Idea </ViewSpan> or Business in The
            Current Digital Era.
          </ViewHeading>
        </InnerLayout>
      </MainLayout>
      <CardLayout>
        <ViewCard
          srNo={OverViewData[0].srNo}
          title={OverViewData[0].title}
          details={OverViewData[0].details}
        />
        <ImageContainer>
          <StyledImage src={ViewImage} alt="" />
        </ImageContainer>
      </CardLayout>
      <CardLayout>
        <ImageContainer>
          <StyledImage src={ViewImage1} alt="" />
        </ImageContainer>
        <ViewCard
          srNo={OverViewData[1].srNo}
          title={OverViewData[1].title}
          details={OverViewData[1].details}
        />
      </CardLayout>
      <CardLayout>
        <ViewCard
          srNo={OverViewData[2].srNo}
          title={OverViewData[2].title}
          details={OverViewData[2].details}
        />
        <ImageContainer>
          <StyledImage src={ViewImage1} alt="" />
        </ImageContainer>
      </CardLayout>
    </>
  );
};

export default OverView;
