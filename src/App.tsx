import './App.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { Home } from "./components"
import { UserWrapper } from './components'
import { ThemeProvider } from './components/useContext/ThemeContext'
import { Layout } from "./components/"

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "user/:id",
          element: <UserWrapper />
        },
        {
          path: "*",
          element: <h1> Page not found </h1>
        }
      ]
    },
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
