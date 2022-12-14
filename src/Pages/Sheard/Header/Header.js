import React, { useContext } from 'react';
import { FaSellcast, FaBiohazard } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import SocialLogin from '../SocialLogin/SocialLogin';


const Header = () => {
    const {logout,user} = useContext(AuthContext);


  const handleLogout =()=>{
    logout()
    .then()
    .catch(e => console.error(e));
  }


    const menuItem = <>
        <li className="font-semibold"><Link to='/blogs'>Blogs</Link></li>
        <li className="font-semibold"><Link to='/'>Home</Link></li>
        

        {
          user?.email ?
          <>
            <li className="font-semibold"><Link to='/myreviews'>My Review</Link></li>
            <li className="font-semibold"><Link to='/addservice'>Add Service</Link></li>
            <li onClick={handleLogout} className="btn-ghost"><Link to='/login'>Logout</Link></li>
          </>
          :
            <li className="font-semibold"><Link to='/login'>Login</Link></li>

        }


            <SocialLogin></SocialLogin>
    </>



    return (

       <div>
         <div>
            <h2 className="text-5xl font-extrabold ms-10 "> <FaSellcast></FaSellcast> Softwer Service Center</h2>
            </div>
        
        <div className="navbar h-20 mb-5 mt-12 bg-neutral text-neutral-content">
            
            
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-2xl">
                   <FaBiohazard></FaBiohazard>  software
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                   {menuItem}
                </ul>
            </div>
            <div className="navbar-end">
                <Link className="btn btn-default">Get started</Link>
                
            </div>
        </div>
       </div>
    );
};

export default Header;