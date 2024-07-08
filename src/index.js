import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import Template from './components/Template';


const router = createBrowserRouter([
  {
    path:"/",
    element:<Template/>,
    // errorElement:<Home/>,
    children:[
      {
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
