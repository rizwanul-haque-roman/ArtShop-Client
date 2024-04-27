import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import AllCrafts from "../components/allCrafts/AllCrafts";
import AddItem from "../components/addItem/AddItem";
import Home from "../components/home/Home";
import MyList from "../components/myList/MyList";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import ErrorPage from "../components/error/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:3000/paintings"),
      },
      {
        path: "/allCrafts",
        element: <AllCrafts />,
      },
      {
        path: "/addItem",
        element: <AddItem />,
      },
      {
        path: "/myList",
        element: <MyList />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
