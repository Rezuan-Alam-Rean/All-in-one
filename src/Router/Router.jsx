import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Component/Layout/MainLayout";


import Home from "../Component/pages/Home/Home";
import Login from "../Component/pages/Login/Login";
import Logout from "../Component/pages/Login/Logout";
import Register from "../Component/pages/Login/Register";
import Projects from "../Component/pages/Projects/Projects";




const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,

        children: [
            {

                    path: "/",
                    element:<Home></Home>
                     

            },
            {
              path: "/Login",
              element: <Login></Login>
            },
            {
              path: "/Logout",
              element:<Logout></Logout>

            },
            {

            path:"/Register",
            element: <Register></Register>
            },
            
            {

            path:"/Projects",
            element: <Projects></Projects>
            },


        ]



    },
  ]);



  export default router ;