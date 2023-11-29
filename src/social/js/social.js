import React from "react";
import insta from "../assets/insta.svg"
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg"
import gmail from "../assets/gmail.svg"


const icons = [gmail, twitter,insta, linkedin]
function Social(){
    return (
        <div className='social'>
            <ul>
                {icons.map((item,index)=>{
                    return(
                    <li key={index}>
                        <img src={`${item}`} id={`item${index}`} alt={`${item}`}/>
                    </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default Social;