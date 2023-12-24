import React from 'react'

import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router'
import AuthProvider from './Provider/AuthProvider'
import { Toaster } from 'react-hot-toast'
import { HelmetProvider } from 'react-helmet-async'






ReactDOM.createRoot(document.getElementById('root')).render(

  <div className=' bg-white max-w-7xl mx-auto'>

    <HelmetProvider>
      <React.StrictMode>
        <Toaster />
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </React.StrictMode>

    </HelmetProvider>

  </div>

)


