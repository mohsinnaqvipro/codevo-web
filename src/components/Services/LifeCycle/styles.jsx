import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const MainLayout = styled.div`
  padding: 1rem 4rem;
  display: flex;
  flex-direction: column;
  justify-contact: center;
  align-items: center;
`;

export const LifeHeading = styled.h1`
  color: #000;
  text-align: center;
  font-size: 2.625rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const LifeSpam = styled.span`
  color: #1e40af;
  font-size: 2.625rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const LifeText = styled.p`
  width: 58.125rem;
  color: #6b7280;
  text-align: center;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 161.023%;
`;

export const LifeContainer = styled.div`
  padding: 1rem 4rem;
  display: flex;
  flex-wrap: wrap;
`;

export const ProductContainer = styled.div`
  padding: 3rem 0rem 0rem 1rem;
  width: 18.4375rem;
  border: 1px solid #eee;
  background: #fff;
`;

export const StyledButton = styled(Button)`
  border-radius: 0.375rem;
  background: #1e40af;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.25rem;
  letter-spacing: 0.00125rem;
  padding: 0.8rem;
`;

export const ProductHeading = styled.h1`
  width: 14.125rem;
  color: #000;
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: 0.02rem;
`;
