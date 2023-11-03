import React from "react";

import LifeCycleCard from "./LifeCycleCard";

import { LifeCycleData } from "@/utils/Constants/ServicesConstants";

import {
  MainLayout,
  LifeHeading,
  LifeSpam,
  LifeText,
  LifeContainer,
  StyledButton,
  ProductContainer,
  ProductHeading,
} from "./styles";

const LifeCycle = () => {
  return (
    <>
      <MainLayout>
        <LifeHeading>
          {`Our `}{" "}
          <LifeSpam>{`Custom Software Development Lifecycle`} </LifeSpam>{" "}
        </LifeHeading>
        <LifeText>{`We engineer custom-built software because we don’t believe in the standardized requirements. With the best practice processes and development methodologies work as a foundation for the rapid building of cutting-edge technology solutions in a structured way.`}</LifeText>
      </MainLayout>
      <LifeContainer>
        {LifeCycleData.map((item, index) => (
          <LifeCycleCard
            key={index}
            SrNo={item.SrNo}
            title={item.title}
            detailes={item.Detailes}
          />
        ))}
        <ProductContainer>
          <ProductHeading>{`Want to Build a Product?`}</ProductHeading>
          <StyledButton variant="contained">{`Lets Talk`}</StyledButton>
        </ProductContainer>
      </LifeContainer>
    </>
  );
};

export default LifeCycle;
