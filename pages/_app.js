import '../styles/globals.css'

import Head from 'next/head'
import Image from 'next/image'

import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return ( 
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
