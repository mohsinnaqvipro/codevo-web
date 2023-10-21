import { Button, TextField } from '@mui/material'
import styled from 'styled-components'

export const MainLayout = styled.div`
  padding: 6rem 14rem;
`

export const InnerLayout = styled.div`
  border-radius: 0.3125rem;
  background: #1e40af;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const InfoContainer = styled.div`
  display: inherit;
  flex-direction: column;
  width: 40%;
  gap: 2rem;
`

export const ContactUsText = styled.h1`
  color: #ffffff;
  font-size: 2.625rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  // padding-bottom: 3rem;
`

export const ContactInfo = styled.div`
  display: flex;
  align-item: center;
  gap: 1.5rem;
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const TitleInfoText = styled.p`
  color: #ffffff;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.25rem;
  margin: 0;
`

export const ValueInfoText = styled.p`
  margin: 0;
  color: #ffffff;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 300;
  line-height: 1.25rem;
  margin: 0;
`

export const IconWrapper = styled.div``

export const FormContainer = styled.div`
  padding: 2rem 1rem;
  background-color: #ffffff;
  border-radius: 0.625rem;
  width: 60%;
`

export const NameContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`

export const ButtonHolder = styled.div`
  display: grid;
  padding-top: 3rem;
`

export const MuiButton = styled(Button)`
  padding: 1rem 1.25rem;
  border-radius: 0.625rem;
  background: #ff8181;
`

export const EmailInputHolder = styled.div`
  display: grid;
`

export const MessageInputHolder = styled.div`
  display: grid;
`
