import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import DetailsPage from './DetailsPage';


const Details = () => {
    const detailService = useLoaderData();

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/review-all')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <h2>Details Page{detailService.length}</h2>
            <div className='grid gap-6 mb-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                    services.map(service => <DetailsPage
                        key={service._id}
                        service={service}
                    ></DetailsPage>
                        
                    
                    )
            }
            </div>
        </div>
    );
};

export default Details;