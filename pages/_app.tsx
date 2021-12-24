import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Naviation from '../components/Navigation'
import React from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Naviation/>
        <Component {...pageProps} />
        
    </>
  )
}

export default MyApp
