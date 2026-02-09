import './App.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { Home } from "./components"
import UserWrapper from './components/UserWrapper'

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <Home />
    },
    { path: "/User/:id",
      element: <UserWrapper />
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
