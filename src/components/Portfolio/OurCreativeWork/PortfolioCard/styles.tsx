import styled from "styled-components";
import Image from "next/image";
import { Button } from "@mui/material";

export const MainLayout = styled.div`
  padding: 1rem 4rem;
`;
export const InnerLayout = styled.div``;
export const ImageHolder = styled.div`
  width: 23.875rem;
  height: 30.8125rem;
  paadding: 1rem;
  display: flex;
  flex-direction: row;
  gap: 5rem;
`;
export const StyledImage = styled(Image)`
  //   width: 21.75rem;
  //   height: 14.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CardDetails = styled.div`
  font-size: 2.625rem;
  font-weight: 700;
  line-height: normal;
`;
export const CardTitle = styled.h4`
  color: #000;
  font-size: 1.75rem;
  font-weight: 700;
`;
export const CardDiscription = styled.p`
  color: #6b7280;
  width: 20.0625rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 161.023%;
`;
export const ButtonWrapper = styled.div`
  background: #1e40af;
  border-radius: 0.375rem;
  height: 3rem;
  width: 9.875rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledButton = styled(Button)`
  color: #fff;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.00125rem;
`;
export const ScrollWrapper = styled.div`
  width: 15rem;
  height: 0.25rem;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
