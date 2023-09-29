import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import FooterComponent from "./components/FooterComponent";


function App() {
  return (
    <div className="App ">

        {/*<h1 className="sm:text-md md:text-6xl lg:text-5xl 2xl:text-2xl font-bold underline bg-red-300">*/}
        {/*    Hello world!*/}
        {/*</h1>*/}

        <Navbar/>


        <FooterComponent/>

    </div>
  );
}

export default App;
