import React from "react";
import { InnerLayout, MainLayout } from "./styles";
import PortfolioCard from "./PortfolioCard";

const OurCreativeWork = () => {
  return (
    <MainLayout>
      <InnerLayout>{`Our Creative Work`}</InnerLayout>
      <PortfolioCard />
    </MainLayout>
  );
};

export default OurCreativeWork;
