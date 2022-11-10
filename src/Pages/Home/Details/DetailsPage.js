import React from 'react';

const DetailsPage = ({service}) => {
    const { image_url, price, title, description } = service;
    console.log(image_url);
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Price: $ {price} Doller</p>
                <p>{
                    description
                    }</p>
                
            </div>
            <div>
            
            </div>
        </div>
    );
};

export default DetailsPage;