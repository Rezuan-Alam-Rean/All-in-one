import { createBrowserRouter } from "react-router-dom";



const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,

        children: [
            {

                    path: "/about",
                    element: <div>this is putul</div>

            }


        ]



    },
  ]);



  export default router ;