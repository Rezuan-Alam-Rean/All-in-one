import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Component/Layout/MainLayout";

import Login from "../Component/pages/Login";
import Logout from "../Component/pages/Logout";
import Register from "../Component/pages/Register";
import Home from "../Component/pages/Home/Home";




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
              element: <Logout></Logout>

            },
            {

            path:"/Register",
            element:<Register></Register>
            },


        ]



    },
  ]);



  export default router ;