import React from "react";

// import Carousel from "react-material-ui-carousel";
import PortfolioCard from "./PortfolioCard";
import { PortfolioCardData } from "@/utils/Constants/porfolioConstants";
import Carousel from "react-material-ui-carousel";

import { InnerLayout, MainLayout, WorkHeading, WorkSpan } from "./styles";
const OurCreativeWork = () => {
  const cardGroups = [];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
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
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={100}
        showDots={true}
        animation="slide"
      >
        {PortfolioCardData.map((item, index) => (
          <PortfolioCard key={index} items={item} />
        ))}
      </Carousel>
    </>
  );
};

export default OurCreativeWork;
