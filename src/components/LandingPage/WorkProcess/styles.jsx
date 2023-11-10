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
  padding-top: 2rem;
  @media (max-width: ${mobileBreakpoint}) {
    width: 100%;
  }
`;
export const HeadingText = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 2.625rem;
  font-style: normal;
  font-weight: 600;
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
  margin: 0;
  @media (max-width: ${mobileBreakpoint}) {
    width: 80%;
    margin: 0 auto;
  }
`;
