import styled from "styled-components";

export const MainLayout = styled.div`
  padding: 1rem 4rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const InnerLayout = styled.div`
  display: flex;
  gap: 2rem;
  width: 350px;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4rem;
  align-items: center;
  border-radius: 4px;
  background: #f7fbff;
  padding: 4rem;
`;

export const TargetsText = styled.p`
  color: #6b7280;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
`;
