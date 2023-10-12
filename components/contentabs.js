/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import ChartBar from "./chartbar"
import DateRange from "./datepicker";
import TabsIn from "./mytabsinner";
import 'rsuite/dist/rsuite.min.css';

function ContentTab (){


    return(
        <div className="main-content-area">
            {/* left side begin */}
            <div className="content-side-main-left" >
                <div className="left-text-up-div">
                    <div className="p-activity-div"><p className="p-activity">Activity Graph</p></div>
                    <p className="p-mount">$156K</p>
                </div>
                <ChartBar/>



                <div className="actions-bottom-first">
                   <div className="img-div"><img style={{paddingLeft:9, paddingTop:10 , width:20, height:20}} src="/decrease-2.png" /></div> 
                    <div className="p-acivity-middle"><p className="p-activity-two">Goal</p></div>
                    <button className="button-activity">&gt;</button>
                </div>
                




                <div className="actions-bottom">
                   <div className="img-div"><img style={{paddingLeft:9, paddingTop:10 , width:20, height:20}} src="/calendar.png" /></div> 
                    <div className="p-acivity-middle"><p className="p-activity-two">Monthly Pay</p></div>
                    <button className="button-activity">&gt;</button>
                </div>
                




                <div className="actions-bottom">
                   <div className="img-div"><img style={{paddingLeft:9, paddingTop:10 , width:20, height:20}} src="/bag.png" /></div> 
                    <div className="p-acivity-middle"><p className="p-activity-two">Shopping</p></div>
                    <button className="button-activity">&gt;</button>
                </div>
                




                <div className="actions-bottom">
                   <div className="img-div"><img style={{paddingLeft:9, paddingTop:10 , width:20, height:20}} src="/settings.png" /></div> 
                    <div className="p-acivity-middle"><p className="p-activity-two">Setting</p></div>
                    <button className="button-activity">&gt;</button>
                </div>
                





            </div>





            <div className="content-side-main-right">
                <TabsIn />
                <DateRange />
                
                </div>





        </div>
    )
}

export default ContentTab;