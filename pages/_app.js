import '../styles/globals.css'
import '../styles/header.css'
import Head from 'next/head'
import Navbar from '../components/layout/Header'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Revit-Classes-Online</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'
          integrity='sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=='
          crossorigin='anonymous'
          referrerpolicy='no-referrer'
        />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
