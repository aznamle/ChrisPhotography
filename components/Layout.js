import React from 'react'

import Header from './Header'
import Footer from './Footer'

import Head from 'next/head'

const Layout = ({ children }) => {
    return (
        <div className=''>
            <Head>
                <title>ChrisPhotography</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <Header />
            <div>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout
