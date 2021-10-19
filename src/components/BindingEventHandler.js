import React, { Component } from "react";

class Binding extends Component{
    constructor(props){
        super(props)
        this.state={
            message:'hello'
        }
        this.clickHandler=this.clickHandler.bind(this)
    }
    clickHandler(){
        this.setState({
            message: 'thank you'
        })
        console.log(this)
    }
    render(){
        return(
            <div>
                <div>{this.state.message}</div>
                {/*<button onClick={this.clickHandler.bind(this)}>click the button!</button>*/}
                {/*<button onClick={()=>this.clickHandler()}>click the button!</button>*/}
                <button onClick={this.clickHandler}>click the button!</button>
            </div>
        )
    }
}
export default Binding