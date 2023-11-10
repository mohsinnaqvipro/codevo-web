import styled from "styled-components";

const mobileBreakpoint = "768px";

export const MainLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  @media (max-width: ${mobileBreakpoint}) {
    padding: 1rem;
  }
`;

export const InnerLayout = styled.div`
  display: flex;
  gap: 2rem;
  width: 23.75rem;
  height: 20.375rem;
  @media (max-width: ${mobileBreakpoint}) {
    width: 70%;
    margin: 0 auto;
    flex-direction: column;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4rem;
  align-items: center;
  border-radius: 4px;
  background: #f7fbff;
  padding: 4rem;
  @media (max-width: ${mobileBreakpoint}) {
    padding: 1rem;
    & > svg {
      font-size: 100px;
    }
  }
`;

export const TargetsText = styled.p`
  color: #6b7280;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
  @media (max-width: ${mobileBreakpoint}) {
    font-size: 20px;
  }
`;
