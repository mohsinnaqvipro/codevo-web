import Link from 'next/link'
import { Button } from '@mui/material'
import styled from 'styled-components'

export const MainLayout = styled.div`
  padding: 1rem 4rem;
`

export const InnerLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ImageHolder = styled.div``

export const NavContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 2rem;
`

export const StyledLink = styled(Link)`
  color: #afafaf;
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 0.9375rem;
  letter-spacing: -0.00125rem;
  text-decoration: none;
`

export const StyledButton = styled(Button)`
  background: #1e40af;
  // font-family: Inter;
  // font-size: 1rem;
  // font-style: normal;
  // font-weight: 500;
  // line-height: 1.25rem;
  // letter-spacing: 0.00125rem;
`
