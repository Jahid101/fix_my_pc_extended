import React from 'react';
import './Header.css';


const Header = () => {
    return (
        <div className="row mt-4 headerContainer headerBg">
            <div className="col-md-6 headerLeft">
                <h1 style={{fontSize:'60px'}} >BEST COMPUTER <br/>SERVICING CENTER</h1>
                <br/>
                <h3 style={{fontSize:'30px'}}>Fastest Diagnosis and Provide <br/>Solutions Within A Day !</h3>
                <br/>
                <button className="btn btn-info mr-5">Learn More</button>
                <button className="btn btn-success">Our Products</button>
            </div>
        </div>
    );
};

export default Header;
