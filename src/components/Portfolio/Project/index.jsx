"use client";

import { Divider } from "@mui/material";

import {
  MainLayout,
  InnerLayout,
  ProjectCount,
  CountContainer,
  CountText,
} from "./styles";

const Project = () => {
  return (
    <>
      <MainLayout>
        <InnerLayout>
          <CountContainer>
            <ProjectCount>{`50+`}</ProjectCount>
            <CountText>{`Satisfied clients`}</CountText>
          </CountContainer>
          <Divider
            orientation="vertical"
            style={{ background: "#1E40AF", height: "98px", width: "1px" }}
          />
          <CountContainer>
            <ProjectCount>{`50+`}</ProjectCount>
            <CountText>{`Projects completed`}</CountText>
          </CountContainer>
          <Divider
            orientation="vertical"
            style={{ background: "#1E40AF", height: "98px", width: "1px" }}
          />
          <CountContainer>
            <ProjectCount>{`50+`}</ProjectCount>
            <CountText>{`Reviews given`}</CountText>
          </CountContainer>
        </InnerLayout>
      </MainLayout>
    </>
  );
};

export default Project;
