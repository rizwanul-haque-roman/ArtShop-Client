import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import AllCrafts from "../components/allCrafts/AllCrafts";
import AddItem from "../components/addItem/AddItem";
import Home from "../components/home/Home";
import MyList from "../components/myList/MyList";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import ErrorPage from "../components/error/ErrorPage";
import Details from "../components/details/Details";
import PrivateRout from "../components/Private/PrivateRout";
import Update from "../components/update/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:3000/featured"),
      },
      {
        path: "/allCrafts",
        element: <AllCrafts />,
        loader: () => fetch("http://localhost:3000/paintings"),
      },
      {
        path: "/addItem",
        element: (
          <PrivateRout>
            <AddItem />
          </PrivateRout>
        ),
      },
      {
        path: "/myList",
        element: (
          <PrivateRout>
            <MyList />
          </PrivateRout>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRout>
            <Details />
          </PrivateRout>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/paintings/${params.id}`),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRout>
            <Update />
          </PrivateRout>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/paintings/${params.id}`),
      },
    ],
  },
]);

export default router;
