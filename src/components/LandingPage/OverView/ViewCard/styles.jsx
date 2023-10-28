import { Button } from "@mui/material";
import Image from "next/image";
import styled from "styled-components";

const mobileBreakpoint = "768px";

export const MainLayout = styled.div`
  padding: 1rem 4rem;
  display: flex;
  gap: 2rem;
`;
export const ViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 50%;
  @media (max-width: ${mobileBreakpoint}) {
    width: 100%;
    align-items: center;
  }
`;
export const SpanContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${mobileBreakpoint}) {
    width: 40px;
    height: 40px;
    background: blue;
    border-radius: 50%;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
  }
`;
export const ViewSpan = styled.span`
  color: #2a3342;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media (max-width: ${mobileBreakpoint}) {
    color: #fff;
  }
`;

export const DividerContainer = styled.div`
  @media (max-width: ${mobileBreakpoint}) {
    display: none;
  }
`;

export const DividerBlue = styled.div`
  position: absolute;
  width: 35px;
  height: 1px;
  background: #1e40af;
  z-index: 100;
  border: 1px solid #1e40af;
  border-radius: 5px;
`;
export const DividerGrey = styled.div`
  position: relative;
  width: 530px;
  height: 1px;
  background: #c4c4c4;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
`;

export const TextContainer = styled.div`
  @media (max-width: ${mobileBreakpoint}) {
    display: flex;
    align-items: center;
  }
`;
export const HadingSpan = styled.span`
  color: #1e40af;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media (max-width: ${mobileBreakpoint}) {
    font-size: 18px;
    align-items: center;
    max-width: 100%;
  }
`;
export const ViewText = styled.h2`
  color: #666;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  max-width: 80%;
  @media (max-width: ${mobileBreakpoint}) {
    font-size: 18px;
    align-items: center;
    max-width: 100%;
  }
`;

export const ButtonContainer = styled.div``;

export const StyleButton = styled(Button)`
  padding: 1rem 2rem;
  border-radius: 5px;
  background: #1e40af;
`;
export const ImageContainer = styled.div``;

export const StyledImage = styled(Image)``;
