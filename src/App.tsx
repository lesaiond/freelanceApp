import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "./page/LoginPage/LoginPage";
import RegistrationPage from "./page/RegistrationPage/RegistrationPage";
import { MainPage } from "./page/MainPage/MainPage";
// import { AppStyledContainer } from './App.style'

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signUp",
    element: <RegistrationPage />,
  },
  {
    path: "/",
    element: <MainPage />,
  },
]);

function App() {
  return (
    // <AppStyledContainer>
    // </AppStyledContainer>
    <RouterProvider router={router} />
  );
}

export default App;
