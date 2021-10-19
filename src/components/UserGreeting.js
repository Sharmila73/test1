import React, { Component } from "react";
 class UserGreeting extends Component{
    constructor(){
        super()
        this.state={
            isLoggedIn:false
        }
    }
    render(){
        if(this.state.isLoggedIn){
            return(
                <div>Welcome sharmila</div>
            )
        }
        else{
            return(
                <div>welcome guest</div>
            )
        }
        
       /*let message
       if(this.state.isLoggedIn){
           message=<div>welcome sharmila</div>
       }
       else{
        message=<div>welcome Guest</div>
       }
       return <div>{message}</div>
        

       return(
           this.state.isLoggedIn?<div>welcome sharmila</div>:<div>welcome guest</div>
       )
       */


       return(
           this.state.isLoggedIn&&<div>welcome sharmila</div>
       )
    }
}
export default UserGreeting