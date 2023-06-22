
import React from "react";

const List = ({index, itemName, itemPrice})=>{

    function remove(){
        
    }

    return(
        <div>
            <li key={index}>{itemName} - ${itemPrice}</li>
            <button onClick={remove}>Remove</button>
        </div>
    )
}

export default List