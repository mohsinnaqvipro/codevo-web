import { TextField } from "@mui/material";
import styled from "styled-components";

const mobileBreakpoint = "768px";

export const StyledInput = styled(TextField)``;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const InputLabel = styled.label`
  color: #2a3342;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.25rem;
  padding-top: 2rem;
  @media (max-width: ${mobileBreakpoint}) {
    text-align: start;
  }
`;

export const ErrorSpan = styled.span`
  color: red;
  font-size: 14px;
  font-weight: 400;
`;
