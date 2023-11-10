import React from "react";
import { useRouter } from "next/navigation";

import ServicesCard from "./ServicesCard";
import { ServicesData } from "@/utils/Constants/ServicesConstants";
import ServicesCardImg from "@/assets/images/ServicesCardImg.png";
import ServicesCardImg1 from "@/assets/images/ServicesCardImg1.png";
import ServicesCardImg3 from "@/assets/images/servicesCardImg3.png";
import ServicesCardImg4 from "@/assets/images/servicesCardImg4.png";

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
  ServicesContainer,
  ServicesCards,
  BuildContainer,
  BuildHeading,
  StyledButton,
} from "./styles";

const FutureReadyServices = () => {
  const router = useRouter();

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
            url={ServicesCardImg1}
            details={` Our specialized team of experts champions contribute to custom software development for your project`}
          />
        </CardContainer>
      </SolutionContainer>
      <ServicesContainer>
        <ServicesCards>
          {ServicesData.map((items, index) => (
            <ServicesCard
              key={index}
              title={items.title}
              details={items.details}
              url={items.url}
            />
          ))}
        </ServicesCards>
      </ServicesContainer>
      <ServicesContainer>
        <CardContainer>
          <ServicesCard
            title="QA Testing"
            url={ServicesCardImg3}
            details={`After the completion of the project’s development, we ensure smooth testing and validation`}
          />
          <ServicesCard
            title="Digital Marketing"
            url={ServicesCardImg4}
            details={`Looking to fine-tune your social media marketing strategy? We are on the go for you!`}
          />
        </CardContainer>
        <BuildContainer>
          <BuildHeading>{`Want to Build a Product?`}</BuildHeading>
          <StyledButton
            variant="contained"
            onClick={() => router.push("/contactus")}
          >{`Contact Us`}</StyledButton>
        </BuildContainer>
      </ServicesContainer>
    </>
  );
};

export default FutureReadyServices;
