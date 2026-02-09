import './App.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { Home } from "./components"
import { UserWrapper } from './components'
import { ThemeProvider } from './components/ThemeContext'

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
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  )
}

export default App
