import styled from "styled-components";

const mobileBreakpoint = "768px";

export const MainContainer = styled.div`
  padding: 1rem 4rem;
  @media (max-width: ${mobileBreakpoint}) {
    padding: 1rem;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
  gap: 2rem;
  padding: 1rem 2rem;
  @media (max-width: ${mobileBreakpoint}) {
    width: 100%;
  }
`;
export const ClientTitle = styled.h2`
  color: #2a3342;
  text-align: center;
  font-size: 2.625rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
  @media (max-width: ${mobileBreakpoint}) {
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 125.2%;
  }
`;
export const ClientDetail = styled.p`
  color: #12141d;
  text-align: center;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  width: 75%;
  margin: 0 auto;
`;
