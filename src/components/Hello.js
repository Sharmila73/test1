import React from "react";
const Hello=()=>{
    //return(
    //   <div>
    //        <h1>Welcome to our OpenWeaver family</h1>
    //    </div>
    //)
    return React.createElement('div',{id:'hello', className:'dummyclass'},React.createElement('h1',null,'welcome to our family'))
}
export default Hello