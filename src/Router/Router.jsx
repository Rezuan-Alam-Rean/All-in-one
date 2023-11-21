import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Component/Layout/MainLayout";


import Home from "../Component/pages/Home/Home";
import Login from "../Component/pages/Login/Login";
import Logout from "../Component/pages/Login/Logout";
import Register from "../Component/pages/Login/Register";




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


        ]



    },
  ]);



  export default router ;