/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import { useState } from "react";

const ContentTabsInner = () =>{
    
 const [count , setCount] = useState(0)

    return(
        <div>


            <p className="p-innertabsco">13 Sep 2023</p>
            <br/>
            <div className="main-div-innerco">
                <img src=""/>
                <div>
                    <p>Target</p>
                    <p>Equipment</p>
                </div>
                <div><p>10 Sep 20222 at 3:30PM </p></div>
                <div><p> -$12,452,00 </p></div>
                <button></button>
            </div>


           

        </div>
    )
}

export default ContentTabsInner ;