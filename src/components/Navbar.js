import React from 'react';
import {Component} from "react";
import {Link, Route, Routes} from 'react-router-dom';
import CartPage from './CartPage';
import Details from './Details';
import Home from './Home';
import RegistrerForm from "./RegistrerForm";



class Navbar extends Component {
    render() {
        return (
            <div className="">
                <nav className="bg-slate-300 py-2">
                    <ul className="flex flex-row justify-around">
                        <Link to="/" className="p-4  bg-red-300 hover:bg-red-400 rounded-sm text-justify">Home</Link>
                        <Link to="/details" className="p-4 bg-red-300 hover:bg-red-400 rounded-lg">Details</Link>
                        {/*<Link to="/panier" className="p-4 bg-red-300 hover:bg-red-400 rounded-lg">Panier</Link>*/}
                        <Link to="/register" className="p-4 bg-red-300 hover:bg-red-400 rounded-lg">Inscription</Link>

                        <form>
                            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Recherche</label>
                            <div className="">
                                {/*<div className=" inset-y-0 left-0 flex items-center pl-3 pointer-events-none">*/}
                                {/*    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">*/}
                                {/*        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>*/}
                                {/*    </svg>*/}
                                {/*</div>*/}
                                <input type="search" id="default-search" className=" w-60 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockup" required />
                                <button type="submit" className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-[10px]">Recherche</button>
                            </div>
                        </form>
                       <span>  <Link to="/panier" className=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-center ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />

                        </svg></Link>
                        </span>
                    </ul>

                </nav>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/details" element={<Details/>}/>
                    <Route path="/panier" element={<CartPage/>}/>
                    <Route path="/register" element={<RegistrerForm/>}/>

                </Routes>
            </div>
        );
    }
}

export default Navbar;