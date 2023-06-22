import React, {useState} from "react";
import List from "./List";

const Child = ({cartItems, onremove}) => {


    return (
       <div className="child">
          <h2>Child Component</h2>
          <ul>
             {cartItems &&
                cartItems.map((item) => (
                   <li key={item.id}>
                      {item.itemName} - ${item.itemPrice}
                      <button
                         onClick={() => {
                            onremove(item.itemId);
                         }}
                      >
                         Remove
                      </button>
                   </li>
                ))}
          </ul>
       </div>
    );
}

export default Child