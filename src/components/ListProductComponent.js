import React, {useEffect, useState} from 'react';
import axios from "axios";
import {deleteProduct, getAllProducts, updateProduct} from "../services/ProductService";

const ListProductComponent = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);



    useEffect(() => {
        getAllProducts()
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.log(error);
            });

        }, []);

    function removeProduct(id) {
        deleteProduct(id)
            .then(response => {
                console.log(response.data);
                setProducts(products.filter(product => product.id !== id));
            }).catch(error => {
                console.log(error);
            });
    }



    // function addPanier(product) {
    //     const exist = cart.find((item) => item.id === product.id);
    //     if (exist) {
    //         setCart(
    //             cart.map((item) =>
    //                 item.id === product.id ? {...exist, quantity: exist.quantity + 1} : item
    //             )
    //         );
    //     } else {
    //         setCart([...cart, {...product, quantity: 1}]);
    //         console.log("coucou");
    //     }
    // }

    const addCart = (product) => {
        const exist = cart.find((item) => item.id === product.id);
        if (exist) {
            setCart(
                cart.map((item) =>
                    item.id === product.id ? {...exist, quantity: exist.quantity + 1} : item
                )
            );
        } else if (!exist) {
            setCart([...cart, {...product, quantity: 1}]);
            console.log("coucou");
        } else {
            throw new Error("il y a un problème lors de l'ajout de l'article");
        }
    }

    return (
        <>
        <h1 className="text-center text-4xl">Liste des produits</h1>
      <div className="flex">

            <div className="flex flex-wrap justify-around my-[50px]">


                {
                    products.map(product =>

                        <div  key= {product.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-[15px]">
                            <a href="#">
                                <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                {/*<a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">*/}
                                {/*    Read more*/}
                                {/*    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">*/}
                                {/*        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>*/}
                                {/*    </svg>*/}
                                {/*</a>*/}

                                {/*<button*/}
                                {/*    className="btn btn-info p-4 bg-lime-300 hover:bg-lime-400 rounded-lg px-[20px] m-[10px]">Voir*/}
                                {/*</button>*/}
                                {/*<button*/}


                                {/*</button>*/}
                                {/*<button className="btn  p-4 bg-red-300 hover:bg-red-500 rounded-lg px-[10px]  m-[10px]" onClick={() => {removeProduct(product.id)}}>Supprimer</button>*/}
                                <button className="btn  p-4 bg-red-300 hover:bg-red-500 rounded-lg px-[10px]  m-[10px]" onClick={() => {addCart(product)}}>Ajouter au panier</button>
                            </div>
                        </div>
                    )
                }

            </div>
      </div>
            </>
    );
};

    export default ListProductComponent;

