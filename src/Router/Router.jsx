import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Component/Layout/MainLayout";


import Home from "../Component/pages/Home/Home";
import Login from "../Component/pages/Login/Login";
import Logout from "../Component/pages/Login/Logout";
import Register from "../Component/pages/Login/Register";

import ProjectDetails from "../Component/pages/Details/ProjectDetails";
import ArtsDetails from "../Component/pages/Details/ArtsDetails";
import Arts from "../Component/pages/Home/Arts/Arts";
import Project from "../Component/pages/Home/Project/Project";




const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,

    children: [
      {

        path: "/",
        element: <Home></Home>


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

        path: "/Register",
        element: <Register></Register>
      },

      {

        path: "/Projects",
        element:
        <div className="mt-28">
          <Project />

        </div>
        
      },

      {
        path: "/Arts",
        element: <div className="mt-28">

          <Arts />
        </div>

      },

      {
        path: "/pDetails/:id",
        element: <ProjectDetails />

      },
      {
        path: "/aDetails/:id",
        element: <ArtsDetails />

      },

    ]



  },
]);



export default router;