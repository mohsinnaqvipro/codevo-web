import { Button, TextField } from "@mui/material";
import styled from "styled-components";

const mobileBreakpoint = "768px";

export const MainLayout = styled.div`
  padding: 6rem 14rem;
  @media (max-width: ${mobileBreakpoint}) {
    padding: 2rem 0rem;
  }
`;

export const InnerLayout = styled.div`
  border-radius: 0.3125rem;
  background: #1e40af;
  padding: 1rem 2rem;
  display: flex;
  gap: 1rem;
  @media (max-width: ${mobileBreakpoint}) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`;

export const InfoContainer = styled.div`
  display: inherit;
  flex-direction: column;
  width: 40%;
  gap: 2rem;
  @media (max-width: ${mobileBreakpoint}) {
    width: 100%;
  }
`;

export const ContactUsText = styled.h1`
  color: #ffffff;
  font-size: 42px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media (max-width: ${mobileBreakpoint}) {
    font-size: 28px;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  gap: 1.5rem;
  @media (max-width: ${mobileBreakpoint}) {
    flex-direction: column;
    text-align: center;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleInfoText = styled.p`
  color: #ffffff;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.25rem;
  margin: 0;
`;

export const ValueInfoText = styled.p`
  margin: 0;
  color: #ffffff;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 300;
  line-height: 1.25rem;
  margin: 0;
`;

export const IconWrapper = styled.div``;

export const FormContainer = styled.div`
  padding: 2rem 1rem;
  background-color: #ffffff;
  border-radius: 0.625rem;
  width: 60%;
  position: relative;
  top: 2rem;
  border: 1px solid #eee;
  border-radius: 10px;
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.08);
  @media (max-width: ${mobileBreakpoint}) {
    width: 100%;
    padding: 0.5rem 0.1rem;
  }
`;

export const NameContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  @media (max-width: ${mobileBreakpoint}) {
    grid-template-columns: 1fr;
    padding: 1rem;
  }
`;

export const ButtonHolder = styled.div`
  display: grid;
  padding-top: 3rem;
`;

export const MuiButton = styled(Button)`
  padding: 1rem 1.25rem;
  border-radius: 0.625rem;
  background: #ff8181;
`;

export const EmailInputHolder = styled.div`
  display: grid;
  @media (max-width: ${mobileBreakpoint}) {
    padding: 1rem;
  }
`;

export const MessageInputHolder = styled.div`
  display: grid;
  @media (max-width: ${mobileBreakpoint}) {
    padding: 1rem;
  }
`;
