import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)



// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div >

//       <div>

//         <p>rean</p>

//         <Link to="/pbout">

//           <p>about</p>

//         </Link>

//       </div>
//       <Outlet></Outlet>

//     </div>,




//     children: [


//       {
//         path: "/about",
//         element: <p>rean</p>
//       },
//       {
//         path: "/pbout",
//         element: <p>rean loves putul</p>
//       },


//     ]




//   },






// ]);

