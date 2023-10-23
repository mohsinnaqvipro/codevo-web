import React from "react";
import BlogImage from "@/assets/images/latestBlog.png";
import {
  MainLayout,
  InnerLayout,
  TextWrapper,
  ImageHolder,
  BlogTitle,
  StyledImage,
  BlogTime,
} from "./styles";

const LatestBlog = () => {
  return (
    <MainLayout>
      <InnerLayout>
        <TextWrapper>{`Our Latest Blogs`}</TextWrapper>
        <ImageHolder>
          <StyledImage src={BlogImage} alt="" />
        </ImageHolder>
        <BlogTitle>
          {`Collaboration to Develop Coffee and Beverage Industry Expertise in
        Indonesia`}
        </BlogTitle>
        <BlogTime>{`4min . August 19, 2022`}</BlogTime>
      </InnerLayout>
    </MainLayout>
  );
};
export default LatestBlog;
