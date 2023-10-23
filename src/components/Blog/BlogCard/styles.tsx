import styled from "styled-components";
import Image from "next/image";
import { Button } from "@mui/material";

export const MainLayout = styled.div`
  padding: 1rem 4rem;
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
  flex-direction: row;
  gap: 3rem;
`;

export const StyledImage = styled(Image)`
  width: 16.3125rem;
  height: 16rem;
`;
export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.h6`
  font-size: 3rem;
  font-style: normal;
  font-weight: 500;
  line-height: 4rem;
  letter-spacing: -0.03rem;
  margin: 0;
`;
export const TimeAndDate = styled.p`
  color: #717171;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.875rem;
  letter-spacing: 0.0375rem;
  margin: 0;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6rem 4rem;
`;

export const StyledButton = styled(Button)``;
