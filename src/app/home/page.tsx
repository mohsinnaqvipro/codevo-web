"use client";

import React from "react";
import Hero from "@/components/Portfolio/Hero";
import OurCreativeWork from "@/components/Portfolio/OurCreativeWork";
import RootLayout from "@/Layouts/RootLayout";

const HomePage = () => {
  return (
    <>
      <RootLayout>
        <Hero />
        <OurCreativeWork />
      </RootLayout>
    </>
  );
};

export default HomePage;
