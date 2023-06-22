import React, {useState} from "react";
import Child from "./Child";

// const Parent = () => {

//     let [cartItems, setCartItems] = useState([])

//     function addItem(){
//         let itemName = document.getElementById("itemName").value;
//         let itemPrice = document.getElementById("itemPrice").value;
//         setCartItems((prevItems) => [
//            ...prevItems,
//            {
//               itemName: itemName,
//               itemPrice: itemPrice,
//            },
//         ]);
//         console.log(cartItems)
//     }

//     return (
//        <div className="parent">
//           <h1>Parent Component</h1>

//           Item Name
//           <input required id="itemName" type="text" name="itemName" />

//           Item Price
//           <input required id="itemPrice" type="text" name="itemPrice" />

//           <button onClick={addItem} >Add Item</button>

//           <Child cartItems={cartItems} setCartItems={setCartItems} />
//        </div>
//     );
// }




const Parent = () => {
   const [cartItems, setCartItems] = useState([]);
   const [id, setId] = useState(1)
   const [itemName, setItemName] = useState("");
   const [itemPrice, setItemPrice] = useState("");

   function addItem() {
      setCartItems((prevItems) => [
         ...prevItems,
         {
            itemId: id,
            itemName: itemName,
            itemPrice: itemPrice,
         },
      ]);
      setItemName("");
      setItemPrice("");
      setId(id+1);
   }

   const removeItem = (id)=>{
      cartItems.filter(item=>item.itemId!=id)
   }

   return (
      <div className="parent">
         <h1>Parent Component</h1>
         Item Name
         <input
            required
            id="itemName"
            type="text"
            name="itemName"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
         />
         Item Price
         <input
            required
            id="itemPrice"
            type="text"
            name="itemPrice"
            value={itemPrice}
            onChange={(e) => setItemPrice(e.target.value)}
         />
         <button onClick={addItem}>Add Item</button>
         <Child cartItems={cartItems} onremove={removeItem} />
      </div>
   );
};






export default Parent;