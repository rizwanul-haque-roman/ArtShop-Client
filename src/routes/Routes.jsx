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
import SubCategoryCollection from "../components/subCategoryCollection/SubCategoryCollection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://art-and-craft-server-jn7o6shaj.vercel.app/featured"),
      },
      {
        path: "/allCrafts",
        element: <AllCrafts />,
        loader: () =>
          fetch("https://art-and-craft-server-jn7o6shaj.vercel.app/paintings"),
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
        path: "/subcategory/:subcategory",
        element: <SubCategoryCollection />,
        loader: ({ params }) =>
          fetch(
            `https://art-and-craft-server-jn7o6shaj.vercel.app/subcategory/${params.subcategory}`
          ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRout>
            <Details />
          </PrivateRout>
        ),
        loader: ({ params }) =>
          fetch(
            `https://art-and-craft-server-jn7o6shaj.vercel.app/paintings/${params.id}`
          ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRout>
            <Update />
          </PrivateRout>
        ),
        loader: ({ params }) =>
          fetch(
            `https://art-and-craft-server-jn7o6shaj.vercel.app/paintings/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
