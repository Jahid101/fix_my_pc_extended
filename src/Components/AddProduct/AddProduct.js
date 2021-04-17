import axios from 'axios';
import React, { useState } from 'react';
import Admin from '../Admin/Admin';

const AddProduct = () => {

    const [imageURL, setImageURL] = useState(null);
    const [imageURLStatus, setImageURLStatus] = useState();
    const [dbStatus, setDbStatus] = useState(false);


    const handleProductSubmit = e => {
        const productInfo = {
            name: e.target.name.value,
            price: e.target.price.value,
            imageURL: imageURL
        };

        // console.log(productInfo);

        const url = `https://pacific-wildwood-47239.herokuapp.com/addProduct`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productInfo)
        })
            .then(res => res.json())
            .then(data => {
                setDbStatus(data);
                if(data){
                    e.target.reset();
                    alert('Product added successfully.')
                }
            })

        e.preventDefault();
    }


    const handleImageUpload = (event) => {
        console.log(event.target.files[0]);
        const imageData = new FormData()
        imageData.set('key', '737956e4412761b2bafa98f14afe9c86');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                console.log(response.data.data.display_url);
                setImageURL(response.data.data.display_url);
                setImageURLStatus(true);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <div>
            <Admin></Admin>
            <div className="mt-3" style={{ marginLeft: '300px' }}>

                <h3 className="mb-5 ml-5">Add Product</h3>
                <br />

                <form onSubmit={handleProductSubmit}>
                    <h5>Product Name: </h5>
                    <input type="text" class="form-control w-50" placeholder="Product Name" name="name" aria-label="First name" required />
                    <br />

                    <h5>Product Price: </h5>
                    <input type="number" class="form-control w-50" placeholder="Product Price" name="price" aria-label="Last name" required />
                    <br />

                    <h5>Product Image: </h5>
                    <input type="file" onChange={handleImageUpload} class="" placeholder="Last name" aria-label="Last name" required />
                    {
                        <p style={{ color: 'red' }}> {imageURLStatus ? "Image uploaded successfully, Click Submit to send your data to Database." : "After choosing a file, Wait until image get uploaded."}</p>
                    }

                    <input className="btn btn-success mb-3" type="submit" value="Submit" />
                    {
                        <span style={{ color: 'green' }}> {dbStatus ? "Product added successfully." : ""}</span>
                    }
                </form>

            </div>
        </div>
    );
};

export default AddProduct;
