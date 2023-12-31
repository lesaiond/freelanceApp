
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { LoginPage } from './page/LoginPage/LoginPage'
import { SignUpPage } from './page/SignUp/SignUp'
import { MainPage } from './page/MainPage/MainPage'

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/signUp",
    element: <SignUpPage />
  },
  {
    path: "/",
    element: <MainPage />
  },
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
