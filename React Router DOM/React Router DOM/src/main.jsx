import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Github from './components/Github.jsx'

const router= createBrowserRouter(
  [{
    path:'/',
    element:<App />,
    children: [
      {
        path:'',
        element:<Home />
      },{
        path:'about',
        element:<About />
      },{
        path:'contact',
        element:<Contact />
      },{
        path:'github',
        element:<Github />
      }
    ]
  }]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
