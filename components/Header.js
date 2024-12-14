/* eslint-disable @next/next/no-html-link-for-pages */
import Link from "next/link";
import {BiHomeSmile} from "react-icons/bi";
import { CiAlignRight, CiCoinInsert, CiUser, CiLocationArrow1 , CiBank } from "react-icons/ci";



function Header () {
    
   
    return(
        <>
        

        <div className="menu-dash">
            <div className="menu-opn">

            <div >
              <img style={{width:180, height:35 , marginLeft:-30}} alt="logo" src="/coin_3342716.png"  />

        
            </div>
                <div className="desktop-menu">
                <Link href='/'>  <button className="btn-menu-dash"> <CiBank style={{fontSize:14}} /> Dashboard </button></Link>
                <Link href="/pages/Wallet/"> <button className="btn-menu-dash-w"> <CiCoinInsert style={{fontSize:18}}/> Wallet</button> </Link>
                <a  className="btn-menu-dash-a" href='/pages/tradeview/'>       <CiBank style={{marginLeft:15, fontSize:18 }}/> Trading chart </a> 
                <Link href="/pages/todo/"><button className="btn-menu-dash-t"> <CiUser style={{fontSize:18}}/> To do</button> </Link> 
                <Link href="/pages/Support/"><button className="btn-menu-dash"> <CiLocationArrow1 style={{fontSize:18}}/> Support Team</button> </Link> 
                   </div>
                <div className="mobile-menu">
                <Link href='/'>  <button className="btn-menu-dash"> <CiBank style={{fontSize:18}} />  </button></Link>
                <Link href="/pages/Wallet/"> <button className="btn-menu-dash-w"> <CiCoinInsert style={{fontSize:18}}/> </button> </Link>
                <a  className="btn-menu-dash-a" href='/pages/tradeview/'>       <CiBank style={{marginLeft:15, fontSize:18 }}/>  </a> 
                <Link href="/pages/todo/"><button className="btn-menu-dash-t"> <CiUser style={{fontSize:18}}/> </button> </Link> 
                <Link href="/pages/Support/"><button className="btn-menu-dash"> <CiLocationArrow1 style={{fontSize:18}}/></button> </Link> 
                   </div>
               
                
        

           </div>
        </div>

        <div className="footer-dashboard"><p className="p-footer">Bitex betaVersion 0.0.3.0 </p></div>
        
        </>
    )
}

export default Header;