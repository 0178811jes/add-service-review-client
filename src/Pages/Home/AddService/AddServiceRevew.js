import React  from 'react';


const AddServiceRevew = ({ service }) => {
    

    const { rating } = service;
   
    

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">

            <p> Review: {rating}</p>
            
        </div>

    );
};

export default AddServiceRevew;