import styled from "styled-components";
import Image from "next/image";
import { Button } from "@mui/material";

export const MainLayout = styled.div``;
export const InnerLayout = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  width: 30%;
`;

export const CardHolder = styled.div`
  height: 30.8125rem;
  padding: 1rem;
  border: 1px solid #eff2fd;
`;

export const ImageHolder = styled.div``;

export const StyledImage = styled(Image)`
  width: 20.5rem;
  height: 14.75rem;
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const TitleHanding = styled.h3`
  color: #000;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
`;

export const CardText = styled.p`
  color: #6b7280;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 161.023%;
  margin: 0;
`;

export const StyledButton = styled(Button)`
  border-radius: 6px;
  background: #1e40af;
  max-width: 40%;
  padding: 0.5rem;
`;
