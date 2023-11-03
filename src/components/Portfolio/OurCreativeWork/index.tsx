import React from "react";

import PortfolioCard from "./PortfolioCard";
import { PortfolioCardData } from "@/utils/Constants/porfolioConstants";
import "react-multi-carousel/lib/styles.css";

import {
  InnerLayout,
  MainLayout,
  WorkHeading,
  WorkSpan,
  StyledCarousal,
} from "./styles";
const OurCreativeWork = () => {
  const cardGroups = [];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <>
      <MainLayout>
        <InnerLayout>
          <WorkHeading>
            {`Our`} <WorkSpan>{`Creative Work`}</WorkSpan>{" "}
          </WorkHeading>
        </InnerLayout>
      </MainLayout>
      <StyledCarousal
        responsive={responsive}
        ssr
        showDots={true}
        slidesToSlide={1}
        infinite
        containerClass="container-with-dots"
        itemClass="image-item"
        arrows={false}
        deviceType={""}
      >
        {PortfolioCardData.map((item, index) => (
          <PortfolioCard key={index} item={item} />
        ))}
      </StyledCarousal>
    </>
  );
};

export default OurCreativeWork;
