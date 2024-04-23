import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import ContactPage from "./Pages/ContactPage";
import Root from "./Pages/Root";
import CountryPage from "./Pages/CountryPage";
import AboutPage from "./Pages/AboutPage";
import CountriesPage from "./Pages/CountriesPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/countries",
          element: <CountriesPage />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        { path: "/country/:id", element: <CountryPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
