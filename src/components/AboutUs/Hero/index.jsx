"use client";

import React from "react";

import {
  MainLayout,
  InnerLayout,
  HeroHeading,
  HeroText,
  ButtonContinaer,
  HeroButton,
} from "./styles";

const Hero = () => {
  return (
    <MainLayout>
      <InnerLayout>
        <HeroHeading>{`Leading Through Change`}</HeroHeading>
        <HeroText>{`Our team is well vast in software development and is ready to help develop the applications of your choice. We take responsibility for building custom software solutions that caters for automation of your business processes and improve efficiency.`}</HeroText>
        <ButtonContinaer>
          <HeroButton
            variant="outlined"
            size="small"
          >{`Book a Demo`}</HeroButton>
        </ButtonContinaer>
      </InnerLayout>
    </MainLayout>
  );
};
export default Hero;
