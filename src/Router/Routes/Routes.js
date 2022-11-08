import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Review from "../../Pages/Review/Review";
import Blogs from "../../Pages/Sheard/Blogs/Blogs";
import Signup from "../../Pages/Singup/Signup";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path:'/signup',
                element: <Signup></Signup>
            },
            {
                path:'/review/:id',
                element: <Review></Review>,
                loader: ({params})=> fetch(`http://localhost:5000/review/${params.id}`)
            }
        ]
    }
  ]);
  export default router;