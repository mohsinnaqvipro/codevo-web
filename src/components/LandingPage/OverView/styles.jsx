import Image from "next/image";
import styled from "styled-components";

export const MainLayout = styled.div`
  padding: 1rem 4rem;
`;

export const InnerLayout = styled.div`
  width: 66%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

export const ViewHeading = styled.h1`
  color: #2a3342;
  text-align: center;
  font-size: 42px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ViewSpan = styled.span`
  color: #1e40af;
  font-size: 42px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const CardLayout = styled.div`
  padding: 1rem 4rem;
  display: flex;
  gap: 4rem;
`;
export const ImageContainer = styled.div``;

export const StyledImage = styled(Image)``;
