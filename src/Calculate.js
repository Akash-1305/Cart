import React from "react";
import'./App.css';

let i = 0;
const Calculate = (cart) =>
    {
    const data = cart.map((cart) => cart.price);
        if (data === 0) {
            window.alert("Empty cart")
        }
        else{
        data.forEach((data)=>{ i = i+ data})
        window.alert(`The total amount is ${i}`)
        i=0;
        window.alert("Thank you for shopping")
    }
}

export default Calculate;