import styled from "styled-components";
import Image from "next/image";

export const MainLayout = styled.div``;
export const InnerLayout = styled.div`
  padding: 1rem;
  height: 16.4375rem;
  border-radius: 0.25rem;
  background: #f7fbff;
  margin-top: 2rem;
`;
export const ImageHolder = styled.div`
  display: flex;
  gap: 1rem;
`;

export const StyledImage = styled(Image)`
  width: 4.625rem;
  height: 4rem;
  flex-shrink: 0;
`;

export const CardTitle = styled.h2`
  color: #000;
  width: 60%;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2rem;
  margin: 0;
`;

export const DiscriptionWrapper = styled.div`
  margin-top: 1rem;
`;

export const CardDiscription = styled.p`
  width: 15.5625rem;
  color: #6b7280;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 161.023%;
  margin: 0;
`;
