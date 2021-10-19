import react from "react";
import React from "react";
function Columns(){
    const items=[ ]
    return(
        // <React.Fragment>
        // <td>Name</td>
        // <td>sharmila</td>
        // </React.Fragment>
        <React.Fragment>
            {
                items.map(item=>(
                    <React.Fragment key={item.id}>
                        <h1>Title</h1>
                        <p>{item.title}</p>
                    </React.Fragment>
                ))
            }<br/>
            <td> Name</td>
            <td>sharmila</td>
        </React.Fragment>
    )
}
export default Columns