import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const MyReviewRow = ({review, reviewDelete, handleUpdate}) => {

    const {_id, serviceName, customer, phone, price, service, status} = review;
    const [reviewService, setReviewService] = useState({});
    useTitle('My Review')

    useEffect(()=>{
        fetch(`http://localhost:5000/review/${service}`)
        .then(res=>res.json())
        .then(data=> setReviewService(data))
    },[service])

    

    return (
        <tr>
            <th>
                <label>
                     <button onClick={()=>reviewDelete(_id)} className='btn btn-ghost'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-24 h-24">
                            {
                                reviewService?.image_url &&
                                <img src={reviewService.image_url} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">{phone}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">$ {price}</span>
            </td>
            <Link to='/addservice'><td>AddReview</td></Link>
            <th>
                <button
                onClick={()=>handleUpdate(_id)}
                 className="btn btn-ghost btn-xs">{status ? status : 'pending'}</button>
            </th>
        </tr>
    );
};

export default MyReviewRow;