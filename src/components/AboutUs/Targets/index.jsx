"use client";
import React from "react";
import { TargetData } from "@/utils/Constants/AboutConstants";

import { MainLayout, InnerLayout, TargetsText, IconContainer } from "./styles";
const Targets = () => {
  return (
    <MainLayout>
      {TargetData.map((item, index) => (
        <React.Fragment key={index}>
          <InnerLayout>
            <IconContainer>
              {item.icon}
              <TargetsText>{item.title}</TargetsText>
            </IconContainer>
          </InnerLayout>
        </React.Fragment>
      ))}
    </MainLayout>
  );
};

export default Targets;
