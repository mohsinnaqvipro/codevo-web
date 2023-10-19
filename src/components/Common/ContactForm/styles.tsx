import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import styled from "styled-components";

export const MainContainer = styled.div`
  padding: 1rem 4rem;
`;

export const InnerContainer = styled.div`
  background: #1e40af;
  width: 80%;
  margin: 0 auto;
`;
export const HeadingText = styled.h2`
  color: #fff;
  font-size: 42px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 1rem 2rem;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 32px;
  padding: 1rem 3rem;
`;

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
export const InfoText = styled.p`
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  margin: 0;
`;

export const StyledIconContainer = styled.div`
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.41);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const StyledIcon = styled(PhoneIcon)`
  font-size: 24px;
  color: #ffffff;
`;
export const LocationIcon = styled(LocationOnIcon)`
  font-size: 24px;
  color: #ffffff;
`;
