import styled from "@emotion/styled";

const mobileBreakpoint = "768px";

export const MainLayout = styled.div`
  padding: 1rem 4rem;
  @media (max-width: ${mobileBreakpoint}) {
    padding: 1rem;
  }
`;

export const InnerLayout = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const ValuesHading = styled.h1`
  color: #000;
  text-align: center;
  font-size: 2.625rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  margin-top: 2rem;
  @media (max-width: ${mobileBreakpoint}) {
    font-size: 28px;
  }
`;

export const Culture = styled.span`
  color: #1e40af;
  font-size: 2.625rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  margin-top: 2rem;
  @media (max-width: ${mobileBreakpoint}) {
    font-size: 28px;
  }
`;

export const ValuesText = styled.p`
  color: #6b7280;
  text-align: center;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 161.023%;
  width: 88%;
  @media (max-width: ${mobileBreakpoint}) {
    font-size: 18px;
    width: 100%;
  }
`;
