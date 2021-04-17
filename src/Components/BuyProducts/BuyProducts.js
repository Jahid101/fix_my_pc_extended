import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const BuyProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('https://pacific-wildwood-47239.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])


    const spinnerStyle = {
        width : '200px',
        marginLeft : '500px'
    }

    return (
        <div className="container">
            {
                products.length ? "" : <img style={spinnerStyle} src="https://miro.medium.com/max/1600/1*CsJ05WEGfunYMLGfsT2sXA.gif" alt=""/>
            }
            {
                products.map(product => <Card product = {product} ></Card>)
            }
        </div>
    );
};

export default BuyProducts;
