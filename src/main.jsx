import React from 'react'

import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router'
import AuthProvider from './Provider/AuthProvider'
import { Toaster } from 'react-hot-toast'





ReactDOM.createRoot(document.getElementById('root')).render(

  <div className='max-w-7xl mx-auto'>
    <React.StrictMode>
    <Toaster/>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>
  </div>

)


