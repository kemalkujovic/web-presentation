import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import ContactPage from "./Pages/ContactPage";
import Root from "./Pages/Root";
import CountryPage from "./Pages/CountryPage";
import AboutPage from "./Pages/AboutPage";
import CountriesPage from "./Pages/CountriesPage";
import TravelPage from "./Pages/TravelPage";
import TravelDetailsPage from "./Pages/TravelDetailsPage";

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
          path: "/zemlje",
          element: <CountriesPage />,
        },
        {
          path: "/kontakt",
          element: <ContactPage />,
        },
        {
          path: "/o-nama",
          element: <AboutPage />,
        },
        {
          path: "/aranzman",
          element: <TravelPage />,
        },
        {
          path: "/aranzman/:id",
          element: <TravelDetailsPage />,
        },
        { path: "/zemlje/:id", element: <CountryPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
