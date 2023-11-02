"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import InputField from "./InputField";
import {
  MainLayout,
  InnerLayout,
  InfoContainer,
  ContactUsText,
  ContactInfo,
  TextWrapper,
  TitleInfoText,
  ValueInfoText,
  IconWrapper,
  FormContainer,
  NameContainer,
  MuiButton,
  ButtonHolder,
  EmailInputHolder,
  MessageInputHolder,
} from "./styles";
import { useForm } from "react-hook-form";
import {
  ContactData,
  emailValidationRules,
  firstNameValidationRules,
  lastNamenameValidationRules,
} from "@/utils/Constants/constants";

const ContactForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("data: ", data);

    const serviceId = "service_snxhnbi";
    const templateId = "template_ybgtie5";
    const publicKey = "odRjVa96revhyyKph";

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_firstName: data.firstName,
      from_lastName: data.lastName,
      from_email: data.email,
      to_name: "CodeVo Technologies",
      message: data.message,
    };

    // Send the email using EailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)

      .then((response) => {
        alert("Email sent Sucessfully!");
      })
      .catch((error) => {
        console.log("Error sending email", error);
      });
  };

  return (
    <MainLayout>
      <InnerLayout>
        <InfoContainer>
          <ContactUsText>{`Feel Free to Contact Us`}</ContactUsText>
          {ContactData.map((item, index) => (
            <ContactInfo key={index}>
              <IconWrapper>{item.icon}</IconWrapper>
              <TextWrapper>
                <TitleInfoText>{item.title}</TitleInfoText>
                <ValueInfoText>{item.value}</ValueInfoText>
              </TextWrapper>
            </ContactInfo>
          ))}
        </InfoContainer>
        <FormContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <NameContainer>
              <InputField
                name="firstName"
                label="First Name*"
                control={control}
                rules={firstNameValidationRules}
                size="small"
                variant="outlined"
                errors={errors}
              />
              <InputField
                name="lastName"
                label="Last Name*"
                rules={lastNamenameValidationRules}
                control={control}
                size="small"
                variant="outlined"
                errors={errors}
              />
            </NameContainer>
            <EmailInputHolder>
              <InputField
                name="email"
                label="Email*"
                rules={emailValidationRules}
                control={control}
                size="small"
                variant="outlined"
                errors={errors}
              />
            </EmailInputHolder>
            <MessageInputHolder>
              <InputField
                name="message"
                label="Your Message"
                control={control}
                multiline={true}
                size="small"
                variant="outlined"
                errors={errors}
              />
            </MessageInputHolder>
            <ButtonHolder>
              <MuiButton
                type="submit"
                // htmlType='submit'
                variant="contained"
              >{`Send Message`}</MuiButton>
            </ButtonHolder>
          </form>
        </FormContainer>
      </InnerLayout>
    </MainLayout>
  );
};

export default ContactForm;
