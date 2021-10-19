/*import React,{Component} from "react";
class Message extends Component{
    constructor(){
        super()
        this.state={
            message:'welcome',
            name:'sharmila'
        }
    }
    changeMessage(){
        this.setState({
            message:'Thank you for subscribing',
            name:'shiyam'
        })
    }
    render(){
        
        return(
            <div>
                <h1> {this.state.message} {this.state.name}</h1>
                <button onClick={()=>this.changeMessage()}>subscribe</button>
            </div>
        ) 
    }
}
export default Message*/

// Destructuring state
import React,{Component} from "react";
class Message extends Component{
    constructor(){
        super()
        this.state={
            message:'welcome to our page',
            name:'sharmila'
        }
    }
    changeMessage(){
        this.setState({
            message:'Thank you for visiting this page',
            name:'shiyam'
        })
    }
    render(){
        const {message,name}=this.state;
        
        return(
            <div>
                <h1> {message} {name}</h1>
                <button onClick={()=>this.changeMessage()}>VIEW PAGE</button>
            </div>
        ) 
    }
}
export default Message