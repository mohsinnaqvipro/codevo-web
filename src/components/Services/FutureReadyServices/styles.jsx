import styled from "styled-components";
import Button from "@mui/material/Button";

export const MainLayout = styled.div`
  padding: 1rem 4rem;
`;

export const InnerLayout = styled.div`
  text-align: center;
  font-size: 2.625rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const FutureHeading = styled.h2`
  color: #000;
  text-align: center;
  font-size: 42px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const SolutionContainer = styled.div`
  padding: 1rem 4rem;
  display: flex;
  margin-top: 1rem;
`;
export const WorkHeadingWrapper = styled.div`
  width: 50%;
`;
export const Discription = styled.p`
  width: 92%;
  margin: 0 auto;
  color: #6b7280;
  text-align: center;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 161.023%;
`;
export const WorkHeading = styled.h2`
  color: #000;
  font-size: 2.625rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  width: 60%;
`;
export const WorkDiscription = styled.p`
  width: 32rem;
  color: #6b7280;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 161.023%;
`;

export const WorkSpan = styled.span`
  color: #1e40af;
  font-size: 2.625rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const CardContainer = styled.div`
  width: 50%;
  display: flex;
  gap: 1rem;
`;

export const ServicesContainer = styled.div`
  padding: 1rem 4rem;
  display: flex;
  gap: 1rem;
`;
export const ServicesCards = styled.div`
  display: flex;
  gap: 1rem;
`;

export const BuildContainer = styled.div`
  width: 50%;
  height: 18.4375rem;
  border-radius: 0.1875rem;
  background: linear-gradient(73deg, #1e40af 53.52%, #215ff6 127.38%);
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;
export const BuildHeading = styled.h1`
  color: #fff;
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: 0.02rem;
`;
export const StyledButton = styled(Button)`
  border-radius: 0.375rem;
  background: #fff;
  color: #1e40af;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.25rem;
  letter-spacing: 0.00125rem;
  padding: 0.8rem;
`;
