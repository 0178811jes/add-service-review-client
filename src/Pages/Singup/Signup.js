import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Signup = () => {

    const {createUser} = useContext(AuthContext);

    const handleSignup = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(err => console.error(err));
        
        

    }

    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center ">


                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignup} className="card-body mb-4">
                        <h1 className="text-5xl font-bold">Sign Up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" name='name' placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />

                        </div>
                    </form>
                    <p className=" text-center my-5">Already have an account <Link className='text-orange-600 font-bold' to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;