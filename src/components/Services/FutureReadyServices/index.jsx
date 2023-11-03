import React from "react";
import ServicesCard from "./ServicesCard";
import { ServicesData } from "@/utils/Constants/ServicesConstants";
import ServicesCardImg from "@/assets/images/ServicesCardImg.png";

import {
  Discription,
  FutureHeading,
  InnerLayout,
  MainLayout,
  SolutionContainer,
  WorkDiscription,
  WorkHeading,
  WorkHeadingWrapper,
  WorkSpan,
  CardContainer,
} from "./styles";

const FutureReadyServices = () => {
  return (
    <>
      <MainLayout>
        <InnerLayout>
          <FutureHeading>
            {`Ingenious and`} <WorkSpan>{`Future-ready services`}</WorkSpan>{" "}
          </FutureHeading>
        </InnerLayout>
        <Discription>
          {`Our future-ready workforce leverages cutting-edge technologies to provide exceptional products and services that build up the business value. `}
          <br />
          {`From the development of new applications, through modernization, management, design, development, deployment and maintenance, we cover all stages of the application lifecycle`}
        </Discription>
      </MainLayout>
      <SolutionContainer>
        <WorkHeadingWrapper>
          <WorkHeading>
            {`Bespoke `}
            <WorkSpan>{`  Solution`}</WorkSpan> {`for your`}
            <WorkSpan>{`  Business`}</WorkSpan>
          </WorkHeading>
          <WorkDiscription>{`We collaborate with your existing tech team to scale existing software applications or design customized software applications in different domains`}</WorkDiscription>
        </WorkHeadingWrapper>

        <CardContainer>
          <ServicesCard
            title="Graphic Designing"
            url={ServicesCardImg}
            details={` Elevate your brand with our seasoned experience in crafting online identities that make a lasting impact.`}
          />
          <ServicesCard
            title="SaaS Development"
            url={ServicesCardImg}
            details={` Our specialized team of experts champions contribute to custom software development for your project`}
          />
        </CardContainer>
      </SolutionContainer>
      <div style={{ display: "flex" }}>
        {ServicesData.map((items, index) => (
          <ServicesCard
            key={index}
            title={items.title}
            details={items.details}
            url={items.url}
          />
        ))}
      </div>
      <div>
        <CardContainer>
          <ServicesCard
            title="Graphic Designing"
            url={ServicesCardImg}
            details={` Elevate your brand with our seasoned experience in crafting online identities that make a lasting impact.`}
          />
          <ServicesCard
            title="SaaS Development"
            url={ServicesCardImg}
            details={` Our specialized team of experts champions contribute to custom software development for your project`}
          />
        </CardContainer>
        <div></div>
      </div>
    </>
  );
};

export default FutureReadyServices;
