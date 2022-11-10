import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import AddServiceRevew from './AddServiceRevew';

const AddService = () => {
    const addservice = useLoaderData();
    console.log(addservice);

    const [services, setServices] = useState([]);
    

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])

    
    return (
        <div>
            <h2> Add Service</h2>
            
            <div className="card w-96 bg-base-100 shadow-xl mb-5">
            <div className='grid gap-6 mb-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                    services.map(service => <AddServiceRevew
                        key={service._id}
                        service={service}
                    ></AddServiceRevew>
                        
                    
                    )
            }
            </div>
            </div>
        </div>
    );
};

export default AddService;