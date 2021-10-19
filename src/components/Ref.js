
import React from "react";
import { Component } from "react";
class Ref extends Component{
    constructor(){
        super()
        this.inputRef=React.createRef()
        this.cbRef=null
        this.setCbRef=elelment=>{
            this.cbRef= elelment

        }
        


    }
    componentDidMount(){
        if(this.cbRef){
            this.cbRef.focus()
        }
        // this.inputRef.current.focus()
        // console.log(this.inputRef)
    }
    clickHandler=()=>{
        alert(this.inputRef.current.value)
    }
    render(){
        return(
            <div>
                <input type="text" ref={this.inputRef}/>
                <input type="text" ref={this.setCbRef}/>
                <button onClick={this.clickHandler}>click</button>
            </div>
        )
    }
}
export default Ref
