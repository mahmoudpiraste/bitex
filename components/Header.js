import Link from "next/link";
import {BiHomeSmile} from "react-icons/bi";
import { CiAlignRight, CiCoinInsert, CiUser, CiLocationArrow1 , CiBank } from "react-icons/ci";



function Header () {
    
   
    return(
        <>
        <div className="header-main">
        <img style={{width:35, height:35 , marginTop:8, marginRight:5}} alt="logo" src="/coin_3342716.png"  />

        <p style={{marginRight:20, marginTop:12}}>   Bitex, Best Assistant for your trading</p>
        </div>

        <div className="menu-dash">
            <div className="menu-opn">
                <div>
                <Link href="/">   <button className="btn-menu-dash"> <CiBank/>dashboard </button> </Link>
                <Link href="/pages/dashboard/"> <button className="btn-menu-dash"> <CiCoinInsert/> Wallet</button> </Link>
                <Link href="/pages/tradeview/"><button className="btn-menu-dash" > <CiAlignRight/> Trading Chart</button> </Link> 
                <Link href="/pages/todo/"><button className="btn-menu-dash"> <CiUser/> To do</button> </Link> 
                <Link href="/pages/safirinfo/"><button className="btn-menu-dash"> <CiLocationArrow1/> Support Team</button> </Link> 
        </div>
               
                
        

           </div>
        </div>

        <div className="footer-dashboard"><p className="p-footer">Bitex betaVersion 0.0.3.0 </p></div>
        
        </>
    )
}

export default Header;