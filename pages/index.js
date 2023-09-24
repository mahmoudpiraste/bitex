import Head from 'next/head';

import TradingView from './pages/tradeview';


export default function Home() {
  return (
    <div className='main'>
      <Head>
        <title>Bitex</title>
        <meta name="description" content="Best Assistant for your trading" />

        
        <link rel="icon" href="/favicon.ico" />
        
      </Head>

      

      <TradingView />
    </div>
  )
}
