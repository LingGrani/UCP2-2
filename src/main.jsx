import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './component/home';
import About from './component/about';
import Contact from './component/contact';

const router = createBrowserRouter ([
  {
    path: "/UCP2-2/",
    element: <Home/>,
    children: [
      {
        path: "/UCP2-2/",
        element: <Home/>
      },
      {
        path: "/UCP2-2/about",
        element: <About/>
      },
      {
        path: "/UCP2-2/contact",
        element: <Contact/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
