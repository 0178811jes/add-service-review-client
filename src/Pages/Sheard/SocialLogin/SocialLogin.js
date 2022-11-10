import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const SocialLogin = () => {
    useTitle(' Google');

    const {googleLogin}= useContext(AuthContext);

    const handleGoole = () => {
        googleLogin()
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(err => console.error(err));
    }

    return (
        <div>
            
            <button onClick={handleGoole} className="btn btn-ghost">Google</button>
        </div>
    );
};

export default SocialLogin;