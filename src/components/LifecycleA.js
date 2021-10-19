import React from "react";
import { Component } from "react";
import LifecycleB from "./LifecycleB";
class LifecycleA extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'sharmila'
        }
        console.log('lifecycleA constructor')
    }
    static getDerivedStateFromProps(props, state){
        console.log('lifecycleA getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('lifecycleA componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('lifecycleA shouldcomponentupdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, preState){
        console.log('lifecycleA getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('lifecycleA componentDidUpdate')
    }
    chageState=()=>{
        this.setState({
            name:'shiyamala'
        })
    }
    render(){
        console.log('life cycleA render')
        return(
            
            <div>
            <div>lifecycle A</div>
            <button onClick={this.chageState}>changestate</button>
            <LifecycleB/>
            </div>
        )
    }
}
export default LifecycleA