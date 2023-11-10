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
  padding: 2rem 3rem;
  display: flex;
  gap: 3rem;
  justify-content: space-between;

  @media (max-width: ${mobileBreakpoint}) {
    flex-direction: column;
    padding: 0;
  }
`;

export const LeftConatiner = styled.div`
  text-align: center;
`;

export const ImageContainer = styled.div`
  background: #001764;
  width: 438px;
  height: 438px;
  border-radius: 438px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  @media (max-width: ${mobileBreakpoint}) {
    width: 300px;
    height: 300px;
    border-radius: 438px;
    display: flex;
  }
`;

export const StyledImage = styled(Image)`
  width: 350px;
  height: 350px;
  border-radius: 438px;
  @media (max-width: ${mobileBreakpoint}) {
    width: 250px;
    height: 250px;
  }
`;

export const CeoName = styled.h4`
  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
`;

export const CeoDestination = styled.p`
  color: #6b7280;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 161.023%;
  margin: 0;
  @media (max-width: ${mobileBreakpoint}) {
    font-size: 18px;
  }
`;

export const StyledDivider = styled.div`
  height: 20rem;
  width: 1px;
  background: #b8b8b8;
  border: 1px solid #b8b8b8;
  margin-top: 4rem;
  @media (max-width: ${mobileBreakpoint}) {
    width: 20rem;
    height: 1px;
  }
`;
