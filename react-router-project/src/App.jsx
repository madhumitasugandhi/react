import React from 'react'
import './App.css'

import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ParamComp from './components/ParamComp';
import NotFound from './components/NotFound';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: 
      <div>
        <Navbar />
        <Home />
      </div>
    },
    {
      path: '/about',
      element: <div>
        <Navbar />
        <About />
      </div>
    },
    {
      path: '/dashboard',
      element: <div>
        <Navbar />
        <Dashboard />
      </div>
    },
    {
      path: "/student/:id",
      element: <div>
        <Navbar />
        <ParamComp/>
        <h1>Student</h1>
      </div>
    },
    {
      path:'*',
      element: <div>
        <Navbar/>
        <NotFound />
      </div>
    }
  ]
);


function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>

  )
}

export default App
