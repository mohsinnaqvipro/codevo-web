import styled from "styled-components";
import Image from "next/image";
import Carousel from "react-multi-carousel";

export const MainLayout = styled.div`
  padding: 1rem 4rem;
`;

export const InnerLayout = styled.div`
  text-align: center;
  font-size: 2.625rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const WorkHeading = styled.h2`
  color: #000;
  text-align: center;
  font-size: 2.625rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const WorkSpan = styled.span`
  color: #1e40af;
  font-size: 2.625rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CarousalWrapper = styled.div`
  width: 100%;
`;

export const CarousalButton = styled(Image)``;

export const StyledCarousal = styled(Carousel)`
  padding: 1rem 4rem;
  padding-bottom: 3rem;
  .react-multi-carousel-dot button {
    width: 30px;
    height: 0px;
    border-radius: 10%;
    border-color: #c4c4c4;
  }
  .react-multi-carousel-dot--active button {
    border-color: #1e40af;
  }
`;
