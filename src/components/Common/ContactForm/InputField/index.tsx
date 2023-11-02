"use client";
import React from "react";

import { Controller } from "react-hook-form";
import { InputContainer, InputLabel, StyledInput, ErrorSpan } from "./styles";

interface MyComponentProps {
  name: string;
  control: any;
  size: string;
  multiline?: boolean;
  variant: string;
  label: string;
  errors: any;
  rules?: object;
  value?: string;
}

const InputField: React.FC<MyComponentProps> = ({
  name,
  label,
  control,
  multiline,
  size,
  rules,
  variant,
  errors,
  value,
}) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }: any) => (
          <InputContainer>
            <InputLabel>{label}</InputLabel>
            <StyledInput
              size={size}
              multiline={multiline}
              rows={2}
              id="outlined-basic"
              variant={variant}
              value={value}
              {...field}
            />
            {errors[name] && <ErrorSpan>{errors[name].message}</ErrorSpan>}
          </InputContainer>
        )}
      />
    </>
  );
};

export default InputField;
