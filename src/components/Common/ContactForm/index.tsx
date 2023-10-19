"use client";

import {
  MainContainer,
  InnerContainer,
  HeadingText,
  AddressContainer,
  InfoText,
  StyledIconContainer,
  RightContainer,
  LocationIcon,
  StyledIcon,
} from "./styles";

const ContactForm = () => {
  return (
    <>
      <MainContainer>
        <InnerContainer>
          <HeadingText>{`Feel Free to Contact Us`}</HeadingText>
          <RightContainer>
            <AddressContainer>
              <StyledIconContainer>
                <StyledIcon></StyledIcon>
              </StyledIconContainer>
            </AddressContainer>
            <div>
              <InfoText>{`Phone Number`}</InfoText>
              <InfoText>{`+92(333) 860-124-0`}</InfoText>
            </div>
          </RightContainer>
        </InnerContainer>
      </MainContainer>
    </>
  );
};

export default ContactForm;
