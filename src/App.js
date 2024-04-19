import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import ContactPage from "./Pages/ContactPage";
import Root from "./Pages/Root";

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
          path: "/kontakt",
          element: <ContactPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
