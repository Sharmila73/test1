import React from "react";
import { Component } from "react";
import LifecycleA from "./LifecycleA";
class LifecycleB extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'sharmila'
        }
        console.log('life cycleB constructor')
    }
    static getDerivedStateFromProps(props, state){
        console.log('lifecycleB getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('lifecycleB componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('lifecycleB shouldcomponentupdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, preState){
        console.log('lifecycleB getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('lifecycleB componentDidUpdate')
    }
    render(){
        console.log('life cycleB render')
        return(
            
            <div>lifecycle B</div>
            
            
        )
    }
}
export default LifecycleB