import React,{useMemo, useState} from "react";
function Counter1(){
    const [CounterOne,setCounterOne]=useState(0)
    const [counterTwo,setCounterTwo]=useState(0)
    const incrementOne=()=>{
        setCounterOne(CounterOne+1)

    }
    const incrementTwo=()=>{
        
        setCounterTwo(counterTwo+1)
        
    }
    const isEven=useMemo(()=>{
        let i=0
        while (i<2000000000)
        i++
        return CounterOne%2==0
    },[CounterOne])
    return(
        <div>
            <div>
                <button onClick={incrementOne}>count one-{CounterOne}</button>
                <span>{isEven?'even':'odd'}</span>
            </div>
            <div>
                <button onClick={incrementTwo}>count two-{counterTwo}</button>
            </div>
        </div>
    )
    
        

}
export default Counter1