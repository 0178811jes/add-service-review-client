
import React, { useState } from 'react';
// import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
// import useTitle from '../../../hooks/useTitle';


const AddServiceRevew = () => {
const [service, setService] = useState({});
const handelChange= (e) => {
    setService({...service, [e.target.name]:e.target.value});
}

const save= (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/add-service`,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(service),
    })

    .then(res=> res.json())
    .then(data=> console.log(data))
    console.log(service)
}

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content">
                   
                    <div className="card flex-shrink-0 w-100 max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">image</span>
                                </label>
                                
                                <input type="file" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">title</span>
                                </label>
                                
                                <input onChange={(e)=> handelChange(e)} name="title" type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">price</span>
                                </label>
                                
                                <input onChange={(e)=> handelChange(e)} name="price" type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">description</span>
                                </label>
                                <input onChange={(e)=> handelChange(e)} name="description" type="text" placeholder="password" className="input input-bordered" />
                                
                            </div>
                            <div className="form-control mt-6">
                                <button onClick={(e)=> save(e)} className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default AddServiceRevew;