import React, { useState } from "react";


function Wallet (){
    const [count , setCount] = useState(0);
    return(
        <>
        <div>
            <p style={{marginTop:0 }}>Increase Your Wallet amount</p>
        </div>
        <br/>
        <div>
                    <p className="p-count">{count}$</p>
                  <br/>
                <button className="btn-wallet" onClick={ () => setCount( count + 500 ) }>500$</button>
                <button className="btn-wallet" onClick={ () => setCount( count + 1000 ) }>1,000$</button>
                <button className="btn-wallet" onClick={ () => setCount( count + 5000 ) }>5,000$</button>
                <button className="btn-wallet" onClick={ () => setCount( count + 10000 ) }>10,000$</button>
                <button className="btn-wallet" onClick={ () => setCount( count + 50000 ) }>50,000$</button>
                
                
            </div>
            <br/>
            <div>

            <button className="btn-wallet" onClick={ () => setCount( count + 5000 ) }>+</button>
            <button className="btn-wallet" onClick={ () => setCount( count - 5000 ) }>-</button>
                
                <button className="btn-wallet" onClick={ () => setCount( 0 ) }>Reset</button>
            </div>
            <br/>
            <div>
                <button className="submit-wallet">Pay from Banck Account</button>
            </div>
        </>
    )
}

export default Wallet;