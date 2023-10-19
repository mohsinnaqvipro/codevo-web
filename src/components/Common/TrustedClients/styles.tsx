import Image from "next/image";
import styled from "styled-components";

export const MainContainer = styled.div`
  padding: 1rem 4rem;
`;

export const HeaderText = styled.h1`
  color: #2a3342;
  text-align: center;
  font-size: 42px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  padding: 1rem 4rem;
`;

export const StyledImage = styled(Image)``;
