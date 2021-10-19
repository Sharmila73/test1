import React from "react";
export function NameList(){
    const persons=[
        {
            id:1,
            name:'sharmi',
            age:22,
            skill:'react'
        },
        {
            id:2,
            name:'abi',
            age:21,
            skill:'python'
        },
        {
            id:3,
            name:'malini',
            age:20,
            skill:'java'
        }
    ]
    //const personList=persons.map(person=>(<h2> i am {person.name}, {person.age} year old and i know {person.skill}</h2>))
    const names=['sharmi','shiyam','malini']
    //const nameList=names.map((name,index)=><h2 key={index}>{index} {name}</h2>)
    const nameList=names.map((name)=><h2 key={name.id}>{name}</h2>)
    return<div>{nameList}</div>
}
export default NameList