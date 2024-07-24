import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import axios from 'axios'

import './global-styles.css'

import Home from './pages/Home/index.jsx'
import Pricing from './pages/Pricing/index.jsx'
import About from './pages/About/index.jsx'
import Contact from './pages/Contact/index.jsx'


axios.defaults.baseURL = 'https://pay-api-backend-eirp.onrender.com';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/pricing',
    element: <Pricing />,
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/contact',
    element: <Contact /> 
  }
], {basename: "/pay-api/"} )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
