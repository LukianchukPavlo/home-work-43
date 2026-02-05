import './App.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { Home, User1, User2, User3 } from "./components"

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <Home />
    },
    { path: "/User1",
      element: <User1 />
    },   
    { path: "/User2",
      element: <User2 />
    },
    {
      path: "/User3",
      element: <User3 />
    },
    {
      path: "*",
      element: <h1> Page not found </h1>
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
