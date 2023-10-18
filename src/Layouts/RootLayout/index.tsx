import Footer from '@/components/Common/Footer'
import NavBar from '@/components/Common/NavBar'
import React from 'react'

const RootLayout = ({ children }: any) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  )
}

export default RootLayout
