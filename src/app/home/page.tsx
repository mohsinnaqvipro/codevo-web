"use client";

import React from "react";
import RootLayout from "@/Layouts/RootLayout";
import Hero from "@/components/LandingPage/Hero";
import OverView from "@/components/LandingPage/OverView";
import WorkProcess from "@/components/LandingPage/WorkProcess";
import Clients from "@/components/LandingPage/Clients";
import TrustedClients from "@/components/Common/TrustedClients";

const HomePage = () => {
  return (
    <>
      <RootLayout>
        <Hero />
        <OverView />
        <WorkProcess />
        <Clients />
        <TrustedClients />
      </RootLayout>
    </>
  );
};

export default HomePage;
