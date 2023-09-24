import '../styles/globals.css';
import '../styles/header.css'
import '../styles/tradingview.css'
import { router, useRouter } from 'next/router';
import Header from '/components/header'


function MyApp({ Component, pageProps }) {
  // const router= useRouter();

  return (
  <>
      <Header/>
      <Component {...pageProps} />
  </>
  
  )
}

export default MyApp
