import Image from "next/image";
import styled from "styled-components";

const mobileBreakpoint = "768px";

export const MainContainer = styled.div`
  padding: 1rem 4rem;
  @media (max-width: ${mobileBreakpoint}) {
    padding: 1rem;
  }
`;

export const HeaderText = styled.h1`
  color: #2a3342;
  text-align: center;
  font-size: 2.625rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media (max-width: ${mobileBreakpoint}) {
    font-size: 28px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  gap: 4rem;
  padding: 1rem 4rem;
  justify-content: center;
  align-items: center;
  @media (max-width: ${mobileBreakpoint}) {
    padding: 1rem;
    flex-direction: column;
  }
`;

export const StyledImage = styled(Image)`
  width: 12.5rem;
  height: 12.5rem;
`;
