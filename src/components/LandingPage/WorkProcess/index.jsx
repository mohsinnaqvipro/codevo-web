"use client";

import React from "react";

import WorkCard from "./WorkCard/index";

import { MainLayout, InnerLayout, HeadingText, WorkText } from "./styles";

const WorkProcess = () => {
  return (
    <MainLayout>
      <InnerLayout>
        <HeadingText>{`We always follow the standard work process`}</HeadingText>
        <WorkText>{`We solve clients' projects in a simple & efficient way`}</WorkText>
      </InnerLayout>
      <WorkCard />
    </MainLayout>
  );
};

export default WorkProcess;
