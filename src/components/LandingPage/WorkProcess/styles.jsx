import styled from "styled-components";

const mobileBreakpoint = "768px";

export const MainLayout = styled.div`
  padding: 1rem 4rem;
  background-color: #1e40af;
  @media (max-width: ${mobileBreakpoint}) {
    padding: 1rem;
  }
`;

export const InnerLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
  @media (max-width: ${mobileBreakpoint}) {
    width: 100%;
  }
`;
export const HeadingText = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 42px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media (max-width: ${mobileBreakpoint}) {
    font-size: 28px;
  }
`;

export const WorkText = styled.p`
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  @media (max-width: ${mobileBreakpoint}) {
    width: 80%;
    margin: 0 auto;
  }
`;
