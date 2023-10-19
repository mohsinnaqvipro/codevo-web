'use client'
import React from 'react'

import { Controller } from 'react-hook-form'
import { InputContainer, InputLabel, StyledInput } from './styles'

interface MyComponentProps {
  name: string
  control: any
  size: string
  multiline?: boolean
  variant: string
  label: string
  errors: any
  rules?: object
}

const InputField: React.FC<MyComponentProps> = ({
  name,
  label,
  control,
  multiline,
  size,
  rules,
  variant,
  errors
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
              id='outlined-basic'
              variant={variant}
              {...field}
            />
            {errors[name] && <span>{errors[name].message}</span>}
          </InputContainer>
        )}
      />
    </>
  )
}

export default InputField
