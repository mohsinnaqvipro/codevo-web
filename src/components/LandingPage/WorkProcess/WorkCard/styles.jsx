import styled from "styled-components";
import Image from "next/image";

const mobileBreakpoint = "768px";

export const MainLayout = styled.div`
  display: flex;
  padding: 4rem 0rem;

  @media (max-width: ${mobileBreakpoint}) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const InnerLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 30%;
  text-align: center;

  @media (max-width: ${mobileBreakpoint}) {
    max-width: 100%;
    justify-content: center;
  }
`;

export const CricleDiv = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NumberSpan = styled.span``;

export const CardHanding = styled.h5`
  color: #fff;
  font-size: 1.25rem;
  font-weight: 500;
  margin: 0;
`;

export const CardText = styled.p`
  color: #fafafa;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5rem;
  margin: 0;
`;

export const ImageContainer = styled.div`
  align-items: center;
  height: 2.3125rem;

  @media (max-width: ${mobileBreakpoint}) {
    display: None;
  }
`;

export const StyledImage = styled(Image)`
  position: relative;
  top: 20px;
`;
