import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import MyReviewRow from './MyReviewRow';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);



    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])


    const reviewDelete= id =>{
        const proceed= window.confirm('Are you sure,you want cancel this review')
        if(proceed){
            fetch(`http://localhost:5000/myreviews/${id}`, {
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

    return (
        <div>
            <h2 className="text-5xl">You have {reviews.length} orders</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th>message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map(review => <MyReviewRow
                                key={review._id}
                                review={review}
                                reviewDelete={reviewDelete}
                            ></MyReviewRow>)
                        }
                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default MyReviews;