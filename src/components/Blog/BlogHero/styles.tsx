import styled from "styled-components";
import HeroBackground from "@/assets/images/bloghero.png";

export const MainLayout = styled.div`
  background-image: url(${HeroBackground.src});
  background-size: cover;
  background-size: cover;
  background-position: center center;
  height: 41.1875rem;
`;

export const InnerLayout = styled.div`
  padding: 1rem 4rem;
`;
export const TextWrapper = styled.h1`
  display: flex;
  color: #fff;
  font-size: 2.625rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  justify-content: center;
`;
