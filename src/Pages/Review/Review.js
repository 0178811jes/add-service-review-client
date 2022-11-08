import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Reviews = () => {
    const { _id, title, price } = useLoaderData();
    const { user } = useContext(AuthContext);

    const btnService =(_id)=>{
        
    }

    const handleorder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
        }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('servicees is successfully')
                    form.reset();
                }
            })
            .catch(err => console.error(err))

    }

    

    return (
        <div>

<form onSubmit={handleorder}>
                <h2 className="text-4xl">You are about to order: {title}</h2>
                <h4 className="text-3xl">Price: ${price}</h4>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <input name="firstName" type="text" placeholder="first name" className="input input-bordered w-full" />
                <input name="lastName" type="text" placeholder="last name" className="input input-bordered w-full" />
                <input name="phone" type="text" placeholder="your phone" className="input input-bordered w-full"  /> 
                <input name="email" type="text" placeholder="your email" defaultValue={user?.email} className="input input-bordered w-full" />
                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your message"></textarea>
                <input className='btn' type="submit" value="Your order" />
            </form>

        </div>
    );
};

export default Reviews;