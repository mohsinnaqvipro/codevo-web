import styled from "styled-components";
import Image from "next/image";

export const MainLayout = styled.div`
  background-size: cover;
  background-size: cover;
  background-position: center center;
  height: 41.1875rem;
  background-color: #fffff;
  padding-bottom: 4rem;
`;
export const InnerLayout = styled.div`
  padding: 1rem 4rem;
`;

export const TextWrapper = styled.h1`
  display: flex;
  font-size: 2.625rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  justify-content: center;
`;
export const ImageHolder = styled.div`
  display: block;
`;

export const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
  padding-bottom: 1rem;
`;

export const BlogTitle = styled.h2`
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.625rem;
  letter-spacing: -0.02rem;
  color: #121212;
  margin: 0;
`;
export const BlogTime = styled.p`
  color: #717171;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.875rem;
  letter-spacing: 0.0375rem;
  margin: 0;
`;
