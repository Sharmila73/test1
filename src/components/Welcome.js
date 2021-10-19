import React,{Component} from "react";
/*class Welcome extends Component{
    render(){
        //return <h1>Class component</h1>
        return <h1> Welcome {this.props.name} a.k.a {this.props.alias}</h1>
    }
}*/
class Welcome extends Component{
    render(){
        //return <h1>Class component</h1>
        const {name,alias}=this.props
        return <h1> Welcome {name} a.k.a {alias}</h1>
    }
}
export default Welcome