"use client";

import React from "react";
import RootLayout from "@/Layouts/RootLayout";
import Hero from "@/components/Services/Hero";
import FutureReadyServices from "@/components/Services/FutureReadyServices";
import TrustedClients from "@/components/Common/TrustedClients";
import LifeCycle from "@/components/Services/LifeCycle";

const ServicesPage = () => {
  return (
    <>
      <RootLayout>
        <Hero />
        <FutureReadyServices />
        <LifeCycle />
        <TrustedClients />
      </RootLayout>
    </>
  );
};

export default ServicesPage;
