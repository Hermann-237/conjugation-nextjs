import '../styles/globals.css'
import type { AppProps } from 'next/app'
import tw from 'twin.macro'
import styled from '@emotion/styled'
import Naviation from '../components/Navigation'
import React from 'react'
import Footer from '../components/Footer'

const Base = styled.div(tw`min-height[94vh] mx-4 big:mx-20`)
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Naviation />
      <Base>
        <Component {...pageProps} />
      </Base>
      <Footer />
    </>
  )
}

export default MyApp
