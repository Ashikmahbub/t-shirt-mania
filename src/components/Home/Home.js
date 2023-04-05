import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirts from '../Tshirts/Tshirts';
import Cart from '../Cart/Cart';
import './Home.css'

const Home = () => {
    const tshirts =useLoaderData();

    return (
        <div className="home-container">
            <div className='t-shirt-container'>
             
                {
                    tshirts.map(tshirt =><Tshirts 

                        
                        key={tshirt.id}
                        tshirt={tshirt}
                        ></Tshirts>)
                }
            
            </div>
            <div className="cart-container">
                <Cart/>
            
            </div>
          
        </div>
       
    );
};

export default Home;