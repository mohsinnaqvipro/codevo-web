import styled from "styled-components";
import Image from "next/image";
import { Button } from "@mui/material";

const mobileBreakpoint = "768px";

export const MainLayout = styled.div`
  padding: 1rem 4rem;

  @media (max-width: ${mobileBreakpoint}) {
    padding: 1rem;
  }
`;

export const InnerLayout = styled.div`
  background: #fffff;
`;

export const Divider = styled.div`
  border-top: 1px solid var(--neutral-30, #b8b8b8);
`;

export const ImageHolder = styled.div`
  padding: 1.875rem 0rem 1.75rem 0rem;
  display: flex;
  gap: 3rem;

  @media (max-width: ${mobileBreakpoint}) {
    flex-direction: column;
  }
`;

export const StyledImage = styled(Image)`
  width: 16.3125rem;
  height: 16rem;
  @media (max-width: ${mobileBreakpoint}) {
    height: auto;
    width: 100%;
  }
`;
export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.h6`
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: 4rem;
  letter-spacing: -0.03rem;
  margin: 0;

  @media (max-width: ${mobileBreakpoint}) {
    font-size: 28px;
    text-align: center;
  }
`;
export const TimeAndDate = styled.p`
  color: #717171;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.875rem;
  letter-spacing: 0.0375rem;
  margin: 0;
  @media (max-width: ${mobileBreakpoint}) {
    text-align: center;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6rem 4rem;
`;

export const StyledButton = styled(Button)``;
