import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Routes/Home'
import RootLayout from './Layout/RootLayout'
import Menu from './Routes/Menu'
import Contact from './Routes/Contact'
import Projects from './Routes/Projects'
import Categories from './Routes/Categories'
import About from './Routes/About'


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component:RootLayout,
      children: [
      {
        index:true,
        Component: Home,
      },
      // {
      //   path: "/menu",
      //   Component: Menu,
      // },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/projects",
        Component: Projects,
      },
      {
        path: "/categories",
        Component: Categories,
      },
      {
        path: "/about",
        Component: About,
      },
    ]

    }
  ])

  return (
  
      <RouterProvider router={router}/>
    
  )
}

export default App
