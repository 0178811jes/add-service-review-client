import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import MyReviewRow from './MyReviewRow';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useTitle('My Review')

    useEffect(() => {
        fetch(`https://assignment-11-server-virid.vercel.app/myreviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])


    const reviewDelete= id =>{
        const proceed= window.confirm('Are you sure,you want cancel this review')
        if(proceed){
            fetch(`https://assignment-11-server-virid.vercel.app/myreviews/${id}`, {
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount > 0){
                    alert('Deleted successfully')
                    const remaining = reviews.filter(view=> view._id!==id);
                    setReviews(remaining);
                }
            })
            .catch(err=> console.error(err));
        }
    }

    const handleUpdate = id =>{
        fetch(`https://assignment-11-server-virid.vercel.app/myreviews/${id}`, {
            method: 'PATCH',
            headers: { 
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'Approved'})
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0) {
                const remaining = reviews.filter(view=> view._id!==id);
                const approving = reviews.find(view=> view._id===id);
                approving.status = 'Approved';
                const newReviews = [approving, ...remaining];
                setReviews(newReviews);
            }
        })

    }

    return (
        <div>
            <h2 className="text-5xl text-center">You have {reviews.length} orders</h2>
            <div className="overflow-x-auto w-full ml-6">
                <table className="table w-full">

                    <thead>
                        <tr>
                            
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map(review => <MyReviewRow
                                key={review._id}
                                review={review}
                                reviewDelete={reviewDelete}
                                handleUpdate={handleUpdate}
                            ></MyReviewRow>)
                        }
                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default MyReviews;