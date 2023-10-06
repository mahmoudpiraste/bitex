/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import axios from "axios";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import Tabs from "../../components/Mytabs";

function Dashboard() {

  useEffect(() =>{

    axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether%2Cbinancecoin&vs_currencies=usd')
    .then(function (response){
      console.log(response)
    })
    .catch(function (error){
      console.log(error)
    });


  });



  return (
    <>
    <div className="main-dashboard">



        {/*  middle dashboard area */}

      <div className="middle-dash-main">


        <div className="up-middle-01">
          <div className="welcoming-middle">
            <img className="w-img" src="/mahmoud-1.png"></img>
            <p className="w-p">Welcom Mahmood!</p>
          </div>
          <div className="choice-middle">
          <Dropdown>
         <DropdownTrigger>
          <Button 
          variant="bordered" className="btn-drop-01"
         >
          Choose Account
          </Button>
          </DropdownTrigger >
           <DropdownMenu className="droped-menu" aria-label="Static Actions">
           <DropdownItem className="item-droped" key="new">Visa Card</DropdownItem>
           <DropdownItem className="item-droped" key="copy">Master Card</DropdownItem>
           <DropdownItem className="item-droped" key="edit">Paypal</DropdownItem>
           <DropdownItem className="item-droped" key="delete"  color="danger">
             Defult Wallet
           </DropdownItem>
         </DropdownMenu>
          </Dropdown>
         <div className="card-img-div">
            <img style={{width:25, height:20}} src="/credit-card.png"></img>
          </div>
    
          </div>
        </div>



          {/* counting middle area */}
        <div className="show-total-counts-main">
           <div className="total-numbers-area">




            <div className="total-number-area-01">
            <div className="total-numbers">
              <div className="total-img">
                <img style={{width:30, height:30, paddingLeft:2, paddingTop:3}}  src="/increase.png"/>
              </div>
              <div>
                <p>Total Earning</p>
                <h4 style={{marginTop:-5}}>$12,594.10</h4>
              </div>
            </div>
            <div className="total-numbers">
              <div className="total-img">
                <img style={{width:30, height:30, paddingLeft:2, paddingTop:3}}  src="/decrease.png"/>
              </div>
              <div>
                <p>Total Spending</p>
                <h4 style={{marginTop:-5}}>$243,594.80</h4>
              </div>
            </div>
            </div>



            <div className="total-number-area-01">
            <div className="total-numbers">
              <div className="total-img">
                <img style={{width:30, height:30, paddingLeft:2, paddingTop:3}}  src="/strategy.png"/>
              </div>
              <div>
                <p>Goal for this month</p>
                <h4 style={{marginTop:-5}}>$16,494.80</h4>
              </div>
            </div>
            <div className="total-numbers">
              <div className="total-img">
                <img style={{width:30, height:30, paddingLeft:2, paddingTop:3}}  src="/shopping-bag.png"/>
              </div>
              <div>
                <p>Spending goal</p>
                <h4 style={{marginTop:-5}}>$653,594.80</h4>
              </div>
            </div>
            </div>





           </div>


              {/* choosen card side */}
            <div className="visa-card-area" style={{ backgroundImage: "url(/visa-card-2.png)",backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', borderRadius:8 }}>
                <p style={{fontSize:12, color:"white", marginLeft:10}}>MAHMOOD PIRASTE</p>
              <div className="in-visa-card">
                <div className="in-visa-2"><img src="/chipset.png" style={{width:45, marginLeft:10}}/></div>
                <div><img src="/visa-visa.png" style={{width:65, marginRight:10,marginTop:-35, float:"right"}}/></div>
              </div>
                <p style={{color:"white", marginLeft:10, fontSize:20}}>****  ****   ****  1425</p>
                <div className="in-visa-card" >
                <div className="in-visa-3"><p style={{color:"white", marginLeft:10, fontSize:12}}>EXP: 07/05</p></div>
                <p style={{color:"white", marginLeft:10, fontSize:10}}>CW NUMBER: 205</p>
                </div>
                
            </div>



        </div>

            {/* middle side tabs */}

           <Tabs/>



      </div>







      <div className="right-side-main"><p style={{color:'#ffffff'}}>dashboard</p></div>
      </div>
    
    </>
  );
}

export default Dashboard;
