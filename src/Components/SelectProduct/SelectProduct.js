import React from 'react';
import { Link } from 'react-router-dom';

const SelectProduct = () => {
    return (
        <div className="container text-center mt-3">
            <h3>Select a Product First</h3>
            <Link to="/home">
            <button class="btn btn-success">Select Product</button>
            </Link>
        </div>
    );
};

export default SelectProduct;
