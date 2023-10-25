import Image from "next/image";
import styled from "styled-components";

export const MainLayout = styled.div`
  padding: 1rem 4rem;
`;

export const InnerLayout = styled.div`
  padding: 2rem 3rem;
  display: flex;
  gap: 2.4rem;
`;

export const LeftConatiner = styled.div``;

export const ImageContainer = styled.div`
  background: #001764;
  width: 438px;
  height: 438px;
  border-radius: 438px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledImage = styled(Image)`
  width: 350px;
  height: 350px;
  border-radius: 438px;
`;

export const CeoDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const CeoHeading = styled.h2`
  color: #000;
  font-size: 42px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
`;

export const CeoText = styled.p`
  color: #6b7280;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 161.023%;
  margin: 0;
`;

export const CeoName = styled.h4`
  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
`;

export const CeoDestination = styled.p`
  color: #6b7280;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 161.023%;
  margin: 0;
`;
