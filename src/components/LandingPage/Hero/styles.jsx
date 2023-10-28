import { Button } from "@mui/material";
import styled from "styled-components";
import HeroImage from "../../../assets/images/background.png";

const mobileBreakpoint = "768px";

export const MainLayout = styled.div`
  background: rgba(0, 0, 0, 0.66);
  background-image: url(${HeroImage.src});
`;
export const InnerLayout = styled.div`
  padding: 4rem 4rem;
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 0 auto;

  @media (max-width: ${mobileBreakpoint}) {
    padding: 2rem;
  }
`;

export const HeroHeading = styled.h1`
  color: #fafafa;
  text-align: center;
  font-size: 80px;
  font-style: normal;
  font-weight: 700;
  line-height: 84px;
  letter-spacing: -1px;

  @media (max-width: ${mobileBreakpoint}) {
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
export const HeroText = styled.p`
  color: #fafafa;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-width: ${mobileBreakpoint}) {
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
  }
`;

export const HeroButton = styled(Button)`
  width: 30%;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 6px;
  border: 1px solid #fff;
  color: #fff;
  @media (max-width: ${mobileBreakpoint}) {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px;
    margin: 0 auto;
    width: 70%;
    padding: 0.5rem;
  }
`;
