import React, { useEffect } from "react";
import Head from 'next/head';

function TradingView() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      if (window.TradingView) {
        new window.TradingView.widget({
          "autosize": true,
          "symbol": "XAUUSD",
          "interval": "H",
          "timezone": "Asia/Tehran",
          "theme": "dark",
          "style": "3",
          "locale": "en",
          "toolbar_bg": "#f1f8f6",
          "enable_publishing": true,
          "withdateranges": true,
          "hide_side_toolbar": false,
          "allow_symbol_change": true,
          "watchlist": [
            "BINANCE:BTCUSDT",
            "FX:EURUSD",
            "FX:GBPUSD",
            "BINANCE:BTCUSDTPERP",
            "BINANCE:ETHUSDT",
            "COINBASE:BTCUSD",
            "TVC:GOLD",
            "COINBASE:ETHUSD",
            "BINANCE:ETHBTC",
            "BINANCE:LTCUSDT",
            "TVC:SILVER",
            "BINANCE:OMGUSDT",
            "BINANCE:ONEBTC",
            "BINANCE:ONEUSDT",
            "BINANCE:ONGUSDT",
            "BINANCE:ONTBTC",
          ],
          "details": true,
          "hotlist": true,
          "calendar": true,
          "studies": ["STD;Accumulation_Distribution"],
          "show_popup_button": true,
          "popup_width": "1000",
          "popup_height": "650",
          "container_id": "tradingview_b86f7",
          "alerts": [
            {
              "title": "My Alert 1",
              "condition": "LAST > 100", // Define your alert condition here
              "once_per_bar": true,
              "once_per_session": false,
            },
            {
              "title": "My Alert 2",
              "condition": "LAST < 50", // Define another alert condition here
              "once_per_bar": false,
              "once_per_session": true,
            }
          ],
          custom_translate_function: (key, options) => {
            if (key === 'Indicators') {
              return 'Mahmoud';
            }
            return null;
          },
        });
      }
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <Head>
        <title>TradingView Widget</title>
      </Head>
      <div className="tr-main">
        <br />
        <div className="tradingview-widget-container">
          <div id="tradingview_b86f7"></div>
        </div>
      </div>
    </>
  );
}

export default TradingView;
