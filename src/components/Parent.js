import React, { useCallback } from "react";
import { useState } from "react/cjs/react.development";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";
function Parent(){
    const[age,setAge]=useState(22)
    const[salary,setSalary]=useState(30000)
    const incrementAge=useCallback(()=>{
        setAge(age+1)
    },[age])
    const incrementSalary=useCallback(()=>{
        setSalary(salary+5000)
    },[salary])
    return(
        <div>
            <Title/>
            <Count text="Age" count={age}/>
            <Button handleClick={incrementAge}>INCREMENT AGE</Button>
            <Count text="salary" count={salary}/>
            <Button handleClick={incrementSalary}>INCREMENT SALARY</Button>
        </div>
    )
}

export default Parent