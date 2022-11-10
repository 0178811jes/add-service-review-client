import React, { useContext }  from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';


const AddServiceRevew = ({ service }) => {
    const {user} = useContext(AuthContext)
    
    useTitle('Add Service');
    const { rating } = service;
   
    

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">

            <p> Review:  {rating}</p>
            
        </div>

    );
};

export default AddServiceRevew;