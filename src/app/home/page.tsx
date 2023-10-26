"use client";

import React from "react";
import Hero from "@/components/Portfolio/Hero";
import OurCreativeWork from "@/components/Portfolio/OurCreativeWork";
import RootLayout from "@/Layouts/RootLayout";
<<<<<<< HEAD
import Hero from "@/components/LandingPage/Hero";
import OverView from "@/components/LandingPage/OverView";
import WorkProcess from "@/components/LandingPage/WorkProcess";
import Clients from "@/components/LandingPage/Clients";
import TrustedClients from "@/components/Common/TrustedClients";
=======
import TrustedClients from "@/components/Common/TrustedClients";
import TechStack from "@/components/Portfolio/Stack";
import Project from "@/components/Portfolio/Project";
>>>>>>> feat/portfolio

const HomePage = () => {
  return (
    <>
      <RootLayout>
        <Hero />
<<<<<<< HEAD
        <OverView />
        <WorkProcess />
        <Clients />
=======
        <OurCreativeWork />
        <TechStack />
        <Project />
>>>>>>> feat/portfolio
        <TrustedClients />
      </RootLayout>
    </>
  );
};

export default HomePage;
