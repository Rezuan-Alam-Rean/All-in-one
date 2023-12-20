import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Component/Layout/MainLayout";


import Home from "../Component/pages/Home/Home";
import Login from "../Component/pages/Login/Login";
import Logout from "../Component/pages/Login/Logout";
import Register from "../Component/pages/Login/Register";
import Projects from "../Component/pages/Projects/Projects";
import ProjectDetails from "../Component/pages/Details/ProjectDetails";
import ArtsDetails from "../Component/pages/Details/ArtsDetails";




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
            
            {
              path: "/pDetails/:id",
              element: <ProjectDetails/>
              
            },
            {
              path: "/aDetails/:id",
              element: <ArtsDetails/>
              
            },

        ]



    },
  ]);



  export default router ;