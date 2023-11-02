import styled from "styled-components";
import HeroBackground from "@/assets/images/bloghero.png";

const mobileBreakpoint = "768px";

export const MainLayout = styled.div`
  background-image: url(${HeroBackground.src});
  background-size: cover;
  background-size: cover;
  background-position: center center;
  height: 41.1875rem;
`;

export const InnerLayout = styled.div`
  padding: 1rem 4rem;
  @media (max-width: ${mobileBreakpoint}) {
    padding: 4rem;
  }
`;
export const TextWrapper = styled.h1`
  display: flex;
  color: #fff;
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  justify-content: center;
  @media (max-width: ${mobileBreakpoint}) {
    font-size: 34px;
    width: 70%;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;
