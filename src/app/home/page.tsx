"use client";

import React from "react";
import Hero from "@/components/Portfolio/Hero";
import OurCreativeWork from "@/components/Portfolio/OurCreativeWork";
import RootLayout from "@/Layouts/RootLayout";
import TrustedClients from "@/components/Common/TrustedClients";
import TechStack from "@/components/Portfolio/Stack";
import Project from "@/components/Portfolio/Project";

const HomePage = () => {
  return (
    <>
      <RootLayout>
        <Hero />
        <OurCreativeWork />
        <TechStack />
        <Project />
        <TrustedClients />
      </RootLayout>
    </>
  );
};

export default HomePage;
