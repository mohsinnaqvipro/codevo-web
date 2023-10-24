import styled from "styled-components";
import Image from "next/image";

export const MainLayout = styled.div`
  padding: 3rem 0rem;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
export const InnerLayout = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 30%;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const CricleDiv = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const NumberSpan = styled.span``;

export const CardHanding = styled.h5`
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  margin: 0;
`;

export const CardText = styled.p`
  color: #fafafa;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin: 0;
  max-width: 202px;
`;
export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
}`;

export const StyledImage = styled(Image)`
  position: relative;
  top: 20px;
`;
