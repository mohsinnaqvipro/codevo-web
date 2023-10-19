"use client";

import React from "react";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import { FooterOptions } from "@/utils/Constants/constants";
import {
  MainLayout,
  InnerLayout,
  CodevoContainer,
  IntroText,
  FooterOptionsContainer,
  HeadingText,
  OptionsText,
  NewsLetterContainer,
  StyledButton,
  StyledInputField,
} from "./styles";

const Footer = () => {
  return (
    <MainLayout>
      <InnerLayout>
        <CodevoContainer>
          <Image alt="" src={Logo} />
          <IntroText>{`Experienced in software analysis and design and a deep understanding of the latest IT trends and solutions.`}</IntroText>
        </CodevoContainer>
        {FooterOptions.map((item, index) => (
          <FooterOptionsContainer>
            <HeadingText key={index}>{item.title}</HeadingText>
            {item.options.map((option, index) => (
              <OptionsText key={index} href={option.url}>
                {option.label}
              </OptionsText>
            ))}
          </FooterOptionsContainer>
        ))}
        <NewsLetterContainer>
          <HeadingText>{`Join a Newsletter`}</HeadingText>
          <IntroText>{`Your Email`}</IntroText>
          <StyledInputField
            label={`Enter Your Email`}
            variant={`outlined`}
          ></StyledInputField>
          <StyledButton size="small" variant="contained">{`Send`}</StyledButton>
        </NewsLetterContainer>
      </InnerLayout>
    </MainLayout>
  );
};

export default Footer;
