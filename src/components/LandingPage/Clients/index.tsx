"use client";

import ClientCards from "./ClientCards";
import {
  MainContainer,
  InnerContainer,
  ClientTitle,
  ClientDetail,
} from "./styles";

const Clients = () => {
  return (
    <>
      <MainContainer>
        <InnerContainer>
          <ClientTitle>{`Our clients knows the value we provide`}</ClientTitle>
          <ClientDetail>{`Our clients are very satisfied with our service which can be understood by looking at their feedback`}</ClientDetail>
        </InnerContainer>
        <ClientCards />
      </MainContainer>
    </>
  );
};

export default Clients;
