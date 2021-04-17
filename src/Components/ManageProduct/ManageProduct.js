import React, { useEffect, useState } from 'react';
import Admin from '../Admin/Admin';

const ManageProduct = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://pacific-wildwood-47239.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    const deleted = () => {
        fetch('https://pacific-wildwood-47239.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }


    const handleDelete = (id) => {

        fetch(`https://pacific-wildwood-47239.herokuapp.com/deleteProduct/${id}`, {
            method : "DELETE"
        })
        .then(res => res.json())
        .then(data=>{
            if(data){
                alert('Product Deleted')
                deleted();
            }
        })
    }


    return (
        <div>
            <Admin></Admin>
            <div className="mt-3" style={{ marginLeft: '300px' }}>
                <h3 className="ml-5 mb-5">Total Product : {products.length}</h3>
                {
                    products.map(product =>
                        <div className="d-flex rounded shadow-lg mb-3 w-75">
                            <h5 className="m-5">{product.name}</h5>
                            <h5 className="m-5">${product.price}</h5>
                            <img  className="mb-3 mt-3" style={{ width: '100px', height:'100px' }} src={product.imageURL} alt="" />
                            <button className="btn btn-primary m-5">Edit</button>
                            <button onClick={() => handleDelete(product._id)} className="btn btn-danger m-5">Delete</button>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ManageProduct;
