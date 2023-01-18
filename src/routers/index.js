import { createBrowserRouter } from "react-router-dom";
import App from "App";
import HomePage from "views/HomePage";
import ErrorPage from "views/ErrorPage";
import ContactPage from "views/ContactPage";
import FormPage from "views/FormPage";
import LoginPage from "views/Auth/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "contacts",
        element: <ContactPage />,
      },
      {
        path: "form",
        element: <FormPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
]);

export default router;
