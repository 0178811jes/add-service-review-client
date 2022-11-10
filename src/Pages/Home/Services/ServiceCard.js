import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {_id, image_url, price, title, description } = service;
    console.log(image_url);
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Price: $ {price} Doller</p>
                <p>{
                    description.length > 100 ?
                    <p>{description.slice(0, 100) + '...'}</p>
                    :
                    <p>{description}</p>
                    }</p>
                <div className="card-actions justify-end">
                    <Link to={`/review/${_id}`}>
                        <button className="btn btn-primary">Review</button>
                        
                    </Link>
                    <Link>
                        <button className="btn btn-primary">Add Service</button>
                    </Link>
                   
                </div>
            </div>
            <div>
            
            </div>
        </div>
    );
};

export default ServiceCard;