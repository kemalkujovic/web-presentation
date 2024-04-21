import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import ContactPage from "./Pages/ContactPage";
import Root from "./Pages/Root";
import CountryPage from "./Pages/CountryPage";

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
          path: "/contact",
          element: <ContactPage />,
        },
        { path: "/country/:id", element: <CountryPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
