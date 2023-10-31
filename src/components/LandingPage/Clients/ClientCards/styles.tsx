import Image from "next/image";
import styled from "styled-components";

const mobileBreakpoint = "768px";

export const MainContainer = styled.div`
  padding: 1rem;
  @media (max-width: ${mobileBreakpoint}) {
    padding-right: 2rem;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  // flex-wrap: wrap;
  gap: 2rem;
  @media (max-width: ${mobileBreakpoint}) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const CardContainer = styled.div`
  background-image: linear-gradient(
    to right,
    rgba(236, 212, 216, 0.5),
    rgba(185, 209, 253, 0.5)
  );
  padding: 1rem 2rem;
  width: 30%;
  @media (max-width: ${mobileBreakpoint}) {
    width: 100%;
    padding: 1rem;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  gap: 1rem;
  @media (max-width: ${mobileBreakpoint}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledImage = styled(Image)``;

export const HeadingText = styled.h4`
  color: #12141d;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.5px;
`;

export const IntroText = styled.p`
  color: #77808b;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.875rem;
  text-align: center;
`;
