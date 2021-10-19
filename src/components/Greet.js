import React from "react";
/*const Greet=(props)=>{
    console.log(props)
    return (
        <div>
    <h1> HELLO {props.name} a.k.a  {props.alias}</h1>
    {props.children}
    </div>
    )

} 

*/

//destructuring props in functional component
/*const Greet=({name,alias})=>{
    
    
    return (
        <div>
    <h1> HELLO {name} a.k.a  {alias}</h1>
    
    </div>
    )

} */

const Greet=(props)=>{
    const {name,alias}=props
    
    
    return (
        <div>
    <h1> HELLO {name} a.k.a  {alias}</h1>
    
    </div>
    )

} 
export default Greet