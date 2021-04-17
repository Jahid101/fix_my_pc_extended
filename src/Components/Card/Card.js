import React from 'react';
import { useHistory } from 'react-router';
import './Card.css';

const Card = (props) => {

    const { name, price, imageURL, _id } = props.product;

    const history = useHistory();

    const handleCardClick = () => {
        history.push(`/orders/${_id}`);
    }

    return (
        <div onClick={handleCardClick} class="row container cardInfo mt-5 p-3">
            <div>
                <div>
                    <img src={imageURL} alt="" />
                    <div>
                        <h5>{name}</h5>
                        <p>${price}</p>
                        <button className="btn btn-success">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Card;
