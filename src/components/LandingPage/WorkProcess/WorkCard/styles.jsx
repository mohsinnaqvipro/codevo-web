import styled from "styled-components";
import Image from "next/image";

const mobileBreakpoint = "768px";

export const MainLayout = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;
  gap: 1rem;

  @media (max-width: ${mobileBreakpoint}) {
    flex-direction: column;
  }
`;

export const InnerLayout = styled.div`
  flex-direction: row;
  max-width: 30%;
  justify-content: center;
  @media (max-width: ${mobileBreakpoint}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    text-align: center;
    max-width: 100%;
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
  font-size: 20px;
  font-weight: 700;
  margin: 0;
`;

export const CardText = styled.p`
  color: #fafafa;
  font-size: 16px;
  font-family: Inter;
  font-weight: 400;
  line-height: 24px;
  margin: 0;
  max-width: 202px;
`;

export const ImageContainer = styled.div`
  align-items: center;

  @media (max-width: ${mobileBreakpoint}) {
    display: None;
  }
`;

export const StyledImage = styled(Image)`
  position: relative;
  top: 20px;
`;
