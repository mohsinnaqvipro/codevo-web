"use client";

import { TargetData } from "@/utils/Constants/AboutConstants";

import { MainLayout, InnerLayout, TargetsText, IconContainer } from "./styles";
const Targets = () => {
  return (
    <MainLayout>
      {TargetData.map((item, index) => (
        <>
          <InnerLayout key={index}>
            <IconContainer>
              {item.icon}
              <TargetsText>{item.title}</TargetsText>
            </IconContainer>
          </InnerLayout>
        </>
      ))}
    </MainLayout>
  );
};

export default Targets;
