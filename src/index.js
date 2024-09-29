import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import Template from './components/Template';
import ErrorPage from './components/ErrorPage';
import About from './components/About';


const router = createBrowserRouter([
  {
    path:"/",
    element:<Template/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        index:true,
        path:"home",
        element:<Home/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"services",
        element:<Services/>
      },
      {
        path:"testimonial",
        element:<Testimonial/>
      },
      {
        path:"about",
        element:<About/>
      },
      // {
      //   path:"*",
      //   element:<Navigate to="home"/>
      // }
    ]
  },
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

reportWebVitals();
