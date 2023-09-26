import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Registration from "./Pages/Registration";
import About from "./Pages/About";
import ChiefGuests from "./Pages/Chief-Guests";
import Committee from "./Pages/Committee";
import Contact from "./Pages/Contact";
import CallForPapers from "./Pages/Call-For-Papers"

const router = createBrowserRouter([

  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/call-for-papers",
    element: <CallForPapers />
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/about",
    element: <About />,
  },

  {
    path: "/chief-guests",
    element: <ChiefGuests />,
  },

  {
    path: "/committee",
    element: <Committee />,
  },

  {
    path: "/contact",
    element: <Contact />,
  },
]);

function Routers() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Routers;
