'use client'

import React from 'react'
import Image from 'next/image'
import Logo from '@/assets/images/logo.png'
import { NavItems } from '@/utils/Constants/constants'
import {
  MainLayout,
  InnerLayout,
  ImageHolder,
  NavContainer,
  StyledLink,
  StyledButton
} from './styles'

const NavBar = () => {
  return (
    <MainLayout>
      <InnerLayout>
        <ImageHolder>
          <Image src={Logo} alt=''></Image>
        </ImageHolder>
        <NavContainer>
          {NavItems.map((item, index) => (
            <StyledLink key={index} href={item.url}>
              {item.label}
            </StyledLink>
          ))}
          <StyledButton variant='contained'>{`Contact Us`}</StyledButton>
        </NavContainer>
      </InnerLayout>
    </MainLayout>
  )
}

export default NavBar
