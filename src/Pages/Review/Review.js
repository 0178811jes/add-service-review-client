import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Reviews = () => {
    const {_id, title, price } = useLoaderData();
    const {user} = useContext(AuthContext);

    const handleorder= event=>{
        event.preventDefault();
        const form= event.target;
        const name=`${form.firstName.value} ${form.lastName.value}`;
        const email= user?.email ||'unregistered';
        const phone= form.phone.value;

        const service = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
        }
    }

    return (
        <div>
           
            <form onSubmit={handleorder} className="text-center mb-3">
                <h2 className="text-4xl mb-2">You are about to order: {title}</h2>
                <h4 className="text-3xl">Price: ${price} Doller</h4>
                <input name="firstName" type="text" placeholder="Fast Name" className="input input-bordered input-xs w-full mb-2 max-w-xs" />
                <br />
                <input name="lastName" type="text" placeholder="Last Name" className="input input-bordered input-sm w-full mb-2 max-w-xs" />
                <br />
                <input name="phone" type="text" placeholder="Phone" className="input input-bordered input-md w-full mb-2 max-w-xs" />
                <br />
                <input name="email" type="text" placeholder="email" defaultValue={user?.email} className="input input-bordered input-lg w-full max-w-xs" />
                
            </form>
            <div className="text-2xl text-center mb-2">
            <input className="btn" type="submit" value="Add Service" />
            </div>
            
        </div>
    );
};

export default Reviews;