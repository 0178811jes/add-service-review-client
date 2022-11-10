import Main from "../../layout/Main";
import AddService from "../../Pages/Home/AddService/AddService";
import Details from "../../Pages/Home/Details/Details";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import Review from "../../Pages/Review/Review";
import Blogs from "../../Pages/Sheard/Blogs/Blogs";
import Signup from "../../Pages/Singup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";







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
                element: <PrivateRoute><Review></Review></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/review/${params.id}`)
            },
            {
                path:'/details',
                element: <Details></Details>,
                loader:()=>fetch(`http://localhost:5000/review`)
            },
            {
                path:'/myreviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path:'/addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>,
                loader:({params})=> fetch(`http://localhost:5000/addservice/${params.id}`)
            }

        ]
    }
  ]);
  export default router;