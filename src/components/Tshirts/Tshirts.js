import React from 'react';
import './Tshirt.css'

const Tshirts = ({tshirt}) => {
    const {picture,name,price}=tshirt;
    return (
        <div className='t-shirt'>
           
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <button>Buy Now</button>
            
        </div>
    );
};

export default Tshirts;