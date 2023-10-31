import Image from "next/image";
import styled from "styled-components";

const mobileBreakpoint = "768px";

export const MainLayout = styled.div`
  padding: 1rem 4rem;

  @media (max-width: ${mobileBreakpoint}) {
    padding: 1rem;
  }
`;

export const InnerLayout = styled.div`
  width: 66%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  @media (max-width: ${mobileBreakpoint}) {
    width: 100%;
  }
`;

export const ViewHeading = styled.h1`
  color: #2a3342;
  text-align: center;
  font-size: 42px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (max-width: ${mobileBreakpoint}) {
    font-size: 28px;
  }
`;

export const ViewSpan = styled.span`
  color: #1e40af;
  font-size: 42px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media (max-width: ${mobileBreakpoint}) {
    font-size: 28px;
  }
`;

export const CardLayout = styled.div`
  padding: 1rem 4rem;
  display: flex;
  gap: 4rem;
  @media (max-width: ${mobileBreakpoint}) {
    flex-direction: column;
    padding: 1rem;
  }
`;
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media (max-width: ${mobileBreakpoint}) {
    width: 100%;
  }
`;

export const StyledImage = styled(Image)`
  @media (max-width: ${mobileBreakpoint}) {
    width: 100%;
    height: auto;
  }
`;
