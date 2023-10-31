import Link from "next/link";
import { Button } from "@mui/material";
import styled from "styled-components";

const mobileBreakpoint = "768px";

export const MainLayout = styled.div`
  padding: 1rem 4rem;

  @media (max-width: ${mobileBreakpoint}) {
    padding: 1rem;
  }
`;

export const InnerLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: ${mobileBreakpoint}) {
    justify-content: space-between;
  }
`;

export const ImageHolder = styled.div`
  @media (max-width: ${mobileBreakpoint}) {
  }
`;

export const NavContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: ${mobileBreakpoint}) {
    display: none;
    width: 100%;
  }
`;

export const StyledLink = styled(Link)`
  color: #afafaf;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 0.9375rem;
  letter-spacing: -0.00125rem;
  text-decoration: none;

  &:hover {
    color: #1e40af;
  }
  ${(props) =>
    props.active &&
    `
    color: #1e40af; 
  `}
`;

export const StyledButton = styled(Button)`
  background: #1e40af;
  // font-size: 1rem;
  // font-style: normal;
  // font-weight: 500;
  // line-height: 1.25rem;
  // letter-spacing: 0.00125rem;
`;

export const IconContainer = styled.div`
  display: none;

  @media (max-width: ${mobileBreakpoint}) {
    display: block;
  }
`;
