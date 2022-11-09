import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AddService = () => {
    const addservice = useLoaderData();
    console.log(addservice);

    

    
    return (
        <div>
            <h2> Add Service</h2>
            
            <div className="card w-96 bg-base-100 shadow-xl mb=5">
                <figure className="px-10 pt-10 mb5">
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;