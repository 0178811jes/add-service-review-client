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
                            ></MyReviewRow>)
                        }
                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default MyReviews;