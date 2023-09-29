import React from 'react';
import ListProductComponent from "./ListProductComponent";



const Home = () => {
    return (
        <div className="flex flex-col h-screen image">
            <div className="flex-grow">
            <h1 className="text-7xl">Home</h1>
            <ListProductComponent/>
        </div>
        </div>
    );
};

export default Home;