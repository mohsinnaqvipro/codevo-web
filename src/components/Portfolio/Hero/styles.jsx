import { Button } from "@mui/material";
import styled from "styled-components";
import HeroImage from "../../../assets/images/PortfolioHero.png";

const mobileBreakpoint = "768px";

export const MainLayout = styled.div`
  background: rgba(0, 0, 0, 0.66);
  background-image: url(${HeroImage.src});
`;
export const InnerLayout = styled.div`
  padding: 6.5rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 4rem;
  @media (max-width: ${mobileBreakpoint}) {
    padding: 2rem;
  }
`;

export const HeroHeading = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 2.625rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  width: 50%;
  margin: 0 auto;

  @media (max-width: ${mobileBreakpoint}) {
    width: 100%;
    font-size: 28px;
  }
`;
export const HeroText = styled.p`
  color: #fff;
  text-align: center;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 92%;
  margin: 0 auto;

  @media (max-width: ${mobileBreakpoint}) {
  width: 100%
  font-size: 1.2rem;
  }
`;

export const HeroButton = styled(Button)`
  padding: 1rem 2rem;
  border-radius: 6px;
  border: 1px solid #fff;
  color: #fff;
  margin: 0 auto;
  text-transform: none;

  @media (max-width: ${mobileBreakpoint}) {
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    margin: 0 auto;
    padding: 0.5rem;
  }
`;
