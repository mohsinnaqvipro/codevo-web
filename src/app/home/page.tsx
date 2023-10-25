"use client";

import React from "react";
import RootLayout from "@/Layouts/RootLayout";

import Hero from "@/components/AboutUs/Hero";
import Ceo from "@/components/AboutUs/Ceo";
import Values from "@/components/AboutUs/Values";
import Targets from "@/components/AboutUs/Targets";
import TrustedClients from "@/components/Common/TrustedClients";

const HomePage = () => {
  return (
    <>
      <RootLayout>
        <Hero />
        <Ceo />
        <Values />
        <Targets />
        <TrustedClients />
      </RootLayout>
    </>
  );
};

export default HomePage;
