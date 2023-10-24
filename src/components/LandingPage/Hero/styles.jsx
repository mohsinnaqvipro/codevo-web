import { Button } from "@mui/material";
import styled from "styled-components";
import HeroImage from "../../../assets/images/background.png";

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
`;

export const HeroHeading = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 80px;
  font-style: normal;
  font-weight: 700;
  line-height: 84px;
  letter-spacing: -1px;
`;
export const HeroText = styled.p`
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const HeroButton = styled(Button)`
  width: 30%;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 6px;
  border: 1px solid #fff;
  color: #fff;
`;
