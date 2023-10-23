import React from "react";
// import BlogCardImage from "@/assets/images/BlogCard.png";

import { BlogCardData } from "@/utils/Constants/constants";

import {
  CardDetails,
  CardTitle,
  Divider,
  ImageHolder,
  InnerLayout,
  MainLayout,
  StyledImage,
  TimeAndDate,
  StyledButton,
  ButtonWrapper,
} from "./styles";

const BlogCard = () => {
  return (
    <MainLayout>
      {BlogCardData.map((item, index) => (
        <InnerLayout key={index}>
          <Divider />
          <ImageHolder>
            <StyledImage src={item.imageUrl} alt="" />
            <CardDetails>
              <CardTitle>{item.title}</CardTitle>
              <TimeAndDate>{item.date} </TimeAndDate>
            </CardDetails>
          </ImageHolder>
        </InnerLayout>
      ))}
      <ButtonWrapper>
        <StyledButton variant="outlined">{`Load More`}</StyledButton>
      </ButtonWrapper>
    </MainLayout>
  );
};
export default BlogCard;
