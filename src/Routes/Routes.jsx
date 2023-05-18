import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Blog/Blog";
import Errorpage from "../pages/Errorpage/Errorpage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Errorpage></Errorpage>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/blog',
            element:<Blog></Blog>
        }
      ]
    },
  ]);

  export default router;