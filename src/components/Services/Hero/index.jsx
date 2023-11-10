"use client";
import { useRouter } from "next/navigation";

import React from "react";

import {
  MainLayout,
  InnerLayout,
  HeroHeading,
  HeroText,
  HeroButton,
} from "./styles";

const Hero = () => {
  const router = useRouter();

  return (
    <MainLayout>
      <InnerLayout>
        <HeroHeading>{`Enabling Our Clients to Cultivate a Future-Fit Business`}</HeroHeading>
        <HeroText>{`We take responsibility for building custom software solutions that caters for automation of your business processes and improve efficiency.`}</HeroText>
        <HeroButton
          variant="outlined"
          size="small"
          onClick={() => router.push("/contactus")}
        >{`Book a Demo`}</HeroButton>
      </InnerLayout>
    </MainLayout>
  );
};
export default Hero;
