import styled from 'styled-components'
import Link from 'next/link'

export const MainLayout = styled.div`
  background: #f8f9fa;
  padding: 1rem 4rem;
`

export const InnerLayout = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const CodevoContainer = styled.div`
  display: inherit;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  gap: 2rem;
`

export const IntroText = styled.p`
  color: #77808b;
  font-family: Inter;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.875rem;
`

export const FooterOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const HeadingText = styled.h5`
  color: #1e40af;
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.375rem;
  margin: 0;
  padding-bottom: 1.62rem;
`

export const OptionsText = styled(Link)`
  color: #77808b;
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  margin: 0;
  padding-bottom: 0.5rem;
  text-decoration: none;
`
