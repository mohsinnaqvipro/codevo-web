"use client";

import React from "react";
import RootLayout from "@/Layouts/RootLayout";
import Hero from "@/components/Services/Hero";
import FutureReadyServices from "@/components/Services/FutureReadyServices";
import ServicesCard from "@/components/Services/FutureReadyServices/ServicesCard";
import TrustedClients from "@/components/Common/TrustedClients";

const ServicesPage = () => {
  return (
    <>
      <RootLayout>
        <Hero />
        <FutureReadyServices />
        {/* <ServicesCard /> */}
        <TrustedClients />
      </RootLayout>
    </>
  );
};

export default ServicesPage;
