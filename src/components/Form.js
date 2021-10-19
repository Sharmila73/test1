import React from "react";
import { ReactDOM } from "react";
class ReactForm extends React.Component{
    constructor(){
        super()
        this.state={
            username:"",
            age:null,
            erromsg:""
        };
    }
    uservalue=(event)=>
    {
        let n=event.target.name;
        let v=event.target.value;
        let err="";
        if(n==="age"){
            if(v!=""&& !Number(v))
            {
                err=<strong>invalid , age must be a number</strong>
            }
        }
        this.setState({
            erromsg:err
        });
        this.setState({[n]:v});


    }
    formsubmit=(event)=>{
        event.preventDefault();
        alert("form submited successfully")

    }
    render(){
        return(
            <form onSubmit={this.formsubmit}>
                <h1> Hello {this.state.username}</h1><br/>
                <h2>Your age {this.state.age}</h2>
                <center>
                 Enter your name: <input type="text" name="username" onChange={this.uservalue}/><br/><br/>
                Enter your age: <input type="text" name="age" onChange={this.uservalue}/> {this.state.erromsg}<br/><br/>
                <input type="submit"/>
                </center>
            </form>
        )

    }
    
}


export default ReactForm