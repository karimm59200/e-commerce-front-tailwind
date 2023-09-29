import React from 'react';
import {useState, useEffect}    from "react";

const CartPage = (props) => {


   const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let total = 0;
        cart.forEach((item) => {
            total += item.price * item.quantity;
        });
        setTotal(total);

    }
    , [cart]);



    return (
        <div className="flex flex-col h-screen ">
           <div className="flex-grow">
            <h1>Panier</h1>
            <div className="flex flex-row justify-around">
                <div className="flex flex-col">
                    {cart.map((product) => (
                        <div key={product.id}>
                            <h3>{product.name}</h3>
                            {/*<h3>{product.price}</h3>*/}
                            <h3>{product.quantity}</h3>
                            {/*<button onClick={() => addCart(product)}>+</button>*/}
                            <button>-</button>

                        </div>
                    ))}
                </div>
                <div>
                    <h2>Total : {total}</h2>
                </div>
            </div>
        </div>
        </div>
    );

};

export default CartPage;