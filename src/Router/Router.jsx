import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Component/Layout/MainLayout";
import About from "../Component/pages/About";



const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,

        children: [
            {

                    path: "/about",
                    element: <About></About>

            },


        ]



    },
  ]);



  export default router ;