import React from "react";
import { MainLayout, InnerLayout, TextWrapper } from "./styles";

const BlogHero = () => {
  return (
    <MainLayout>
      <InnerLayout>
        <TextWrapper>{`Elevate Your Knowledge with Our Blog`}</TextWrapper>
      </InnerLayout>
    </MainLayout>
  );
};
export default BlogHero;
