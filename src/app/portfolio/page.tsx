"use client";

import React from "react";
import OurCreativeWork from "@/components/Portfolio/OurCreativeWork";

import RootLayout from "@/Layouts/RootLayout";
import Hero from "@/components/Portfolio/Hero";
import Project from "@/components/Portfolio/Project";
import TrustedClients from "@/components/Common/TrustedClients";
import TechStack from "@/components/Portfolio/Stack";

const PortfolioPage = () => {
  return (
    <>
      <RootLayout>
        <Hero />
        <OurCreativeWork />
        <Project />
        <TechStack />
        <TrustedClients />
      </RootLayout>
    </>
  );
};

export default PortfolioPage;
