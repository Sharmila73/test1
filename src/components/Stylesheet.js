import React from "react";
import './myStyles.css'
function Styles(props){
    let className=props.primary?'primary':''
    return(
        <div>
            <h1 className={`${className} font-xl`}>Do visit our kandi application</h1>
        </div>
    )
}
export default Styles