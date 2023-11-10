import styled from "styled-components";

const mobileBreakpoint = "768px";
export const MainLayout = styled.div`
  padding: 1rem 4rem;
  @media (max-width: ${mobileBreakpoint}) {
    padding: 1rem;
  }
`;

export const InnerLayout = styled.div`
  @media (max-width: ${mobileBreakpoint}) {
  }
`;

export const StackHeading = styled.h2`
  color: #000;
  text-align: center;
  font-size: 2.625rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media (max-width: ${mobileBreakpoint}) {
    font-size: 2rem;
  }
`;

export const StackSpan = styled.span`
  color: #1e40af;
  font-size: 2.625rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media (max-width: ${mobileBreakpoint}) {
    font-size: 2rem;
  }
`;

export const TechContainer = styled.div`
  padding: 1rem 4rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: ${mobileBreakpoint}) {
    padding: 1rem;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;

    & > .css-ftc7wc-MuiDivider-root {
      display: none;
    }
  }
`;
