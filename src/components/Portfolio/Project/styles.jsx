import styled from "styled-components";

const mobileBreakpoint = "768px";

export const MainLayout = styled.div`
  padding: 1rem 4rem;
  @media (max-width: ${mobileBreakpoint}) {
    padding: 1rem;
  }
`;

export const InnerLayout = styled.div`
  display: flex;
  justify-content: center;
  gap: 5rem;

  @media (max-width: ${mobileBreakpoint}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 2rem;

    & > .css-ftc7wc-MuiDivider-root {
      display: none;
    }
  }
`;

export const ProjectCount = styled.h2`
  color: #1e40af;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 48px;
  @media (max-width: ${mobileBreakpoint}) {
    font-sizz: 28px;
  }
`;

export const CountContainer = styled.div``;

export const CountText = styled.p`
  color: #000;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  @media (max-width: ${mobileBreakpoint}) {
    font-size: 24px;
  }
`;
