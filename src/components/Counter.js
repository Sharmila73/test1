import { Component } from "react/cjs/react.production.min";

export class Counter extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }

    }
    increment(incby4){
        /*this.setState({
            count:this.state.count+1
        },
        ()=>console.log('callback value', this.state.count))
        console.log(this.state.count)  */
        this.setState(prevState=>({
            count:prevState.count+incby4
        }))
        console.log(this.state.count)
    }
    /*incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }*/
    render(){
        //const {count}=this.state;  //destructuring state
        return(
            <div>
                <div>Count- {this.state.count}</div>
                <button onClick={()=>this.increment(4)}>increment</button>
            </div>
            
        )
    }
}
export default Counter