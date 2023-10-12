import '../styles/globals.css';
import '../styles/header.css';
import '../styles/tradingview.css';
import '../styles/dashboard.css';
import '../styles/tabs.css';
import '../styles/contentabs.css';
import '../styles/datepicker.css';
// import 'rsuite/dist/rsuite.css';
import Header from '/components/header'



function MyApp({ Component, pageProps }) {
  

  return (
  <>
  
      <Header/>
      <Component {...pageProps} />
  
  </>
  
  )
}

export default MyApp;