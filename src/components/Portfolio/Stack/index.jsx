"use client";

import NodeJs from "@/assets/icons/NodeJs";

import { Divider } from "@mui/material";
import ReactJs from "@/assets/icons/ReactJS";
import Flutter from "@/assets/icons/Flutter";

import {
  MainLayout,
  InnerLayout,
  StackHeading,
  StackSpan,
  TechContainer,
} from "./styles";

const TechStack = () => {
  return (
    <MainLayout>
      <InnerLayout>
        <StackHeading>
          {`Our `}
          <StackSpan>{`Technology Stacks`}</StackSpan>{" "}
        </StackHeading>
        <TechContainer>
          <NodeJs />
          <Divider
            orientation="vertical"
            style={{ background: "#1E40AF", height: "98px", width: "1px" }}
          />
          <ReactJs />
          <Divider
            orientation="vertical"
            style={{ background: "#1E40AF", height: "98px", width: "1px" }}
          />
          <Flutter />
        </TechContainer>
      </InnerLayout>
    </MainLayout>
  );
};

export default TechStack;
