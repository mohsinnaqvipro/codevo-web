import { Button } from "@mui/material";
import styled from "styled-components";
import HeroImage from "../../../assets/images/AboutUsHero.png";

const mobileBreakpoint = "768px";

export const MainLayout = styled.div`
  background: rgba(0, 0, 0, 0.66);
  background-image: url(${HeroImage.src});
`;
export const InnerLayout = styled.div`
  padding: 4rem 4rem;
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
  font-size: 42px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
  @media (max-width: ${mobileBreakpoint}) {
    font-size: 28px;
    line-height: 28px;
    font-weight: 400;
  }
`;
export const HeroText = styled.p`
  color: #fff;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  @media (max-width: ${mobileBreakpoint}) {
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
  }
`;

export const ButtonContinaer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

export const HeroButton = styled(Button)`
  padding: 1rem 2rem;
  border-radius: 6px;
  border: 1px solid #fff;
  color: #fff;
  @media (max-width: ${mobileBreakpoint}) {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px;
    margin: 0 auto;
    padding: 0.5rem;
  }
`;
