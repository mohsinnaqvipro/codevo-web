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
  margin: 0 auto;
  display: flex;
  align-items: center;
  @media (max-width: ${mobileBreakpoint}) {
    width: 100%;
  }
`;

export const ViewHeading = styled.h1`
  color: #2a3342;
  text-align: center;
  font-size: 2.625rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media (max-width: ${mobileBreakpoint}) {
    font-size: 28px;
  }
`;

export const ViewSpan = styled.span`
  color: #1e40af;
  font-size: 2.625rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  @media (max-width: ${mobileBreakpoint}) {
    font-size: 28px;
  }
`;

export const CardLayout = styled.div`
  padding: 1rem 4rem 5rem;
  @media (max-width: ${mobileBreakpoint}) {
    padding: 1rem;
  }
`;

export const CardContainer = styled.div`
  width: 90%;
  margin: 0 auto;
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
  width: 31.68894rem;
  height: 18.92606rem;
  @media (max-width: ${mobileBreakpoint}) {
    width: 100%;
    height: auto;
  }
`;
