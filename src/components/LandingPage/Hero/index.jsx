"use client";
import React from "react";
import { useRouter } from "next/navigation";

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
        <HeroHeading>{`Your Gateway to Digital Discoveries`}</HeroHeading>
        <HeroText>{`Building custom software solutions that caters for automation of your business processes and improve efficiency.`}</HeroText>
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
