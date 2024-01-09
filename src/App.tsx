import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

import { LoginPage } from "./page/LoginPage/LoginPage";
import RegistrationPage from "./page/RegistrationPage/RegistrationPage";
import { MainPage } from "./page/MainPage/MainPage";
import { AppStyledContainer } from "./App.style";
import { ThemeToggle } from "./theme/ThemeToggle";
import { AdminPage } from "./page/AdminPage/AdminPage";
import AdminProjectsPage from "./page/AdminPage/AdminProjectsPage";
import AdminPageStatics from "./page/AdminPage/AdminPageStatics";
import AdminPageSettings from "./page/AdminPage/AdminPageSettings";
import MessagesPage from "./page/MessagesPage/MessagesPage";
import ProfilePage from "./page/ProfilePage/ProfilePage";
import JobsPage from "./page/JobsPage/JobsPage";
import JobDetails from "./components/JobDetails/JobDetails";
import FavoritesPage from "./page/FavoritesPage/FavoritesPage";

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
  {
    path: "/job",
    element: <JobsPage />,
  },
  {
    path: "/job/details",
    element: <JobDetails />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },
  {
    path: "/admin/projects",
    element: <AdminProjectsPage />,
  },
  {
    path: "/admin/statics",
    element: <AdminPageStatics />,
  },
  {
    path: "/admin/settings",
    element: <AdminPageSettings />,
  },
  {
    path: "/messages",
    element: <MessagesPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/favorites",
    element: <FavoritesPage />,
  },
]);

function App() {
  
  return (
    <ThemeToggle>
      <AppStyledContainer>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </AppStyledContainer>
    </ThemeToggle>
  );
}

export default App;
