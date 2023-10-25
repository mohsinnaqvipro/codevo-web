import React from "react";

import Carousel from "react-material-ui-carousel";
import PortfolioCard from "./PortfolioCard";
import { PortfolioCardData } from "@/utils/Constants/porfolioConstants";

import { InnerLayout, MainLayout, WorkHeading, WorkSpan } from "./styles";
const OurCreativeWork = () => {
  return (
    <MainLayout>
      <InnerLayout>
        <WorkHeading>
          {`Our`} <WorkSpan>{`Creative Work`}</WorkSpan>{" "}
        </WorkHeading>
      </InnerLayout>
      <Carousel>
        {PortfolioCardData.map((item, index) => (
          <PortfolioCard key={index} items={item} />
        ))}
      </Carousel>
    </MainLayout>
  );
};

export default OurCreativeWork;
