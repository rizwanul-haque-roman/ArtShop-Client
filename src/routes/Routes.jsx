import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import AllCrafts from "../components/allCrafts/AllCrafts";
import AddItem from "../components/addItem/AddItem";
import Home from "../components/home/Home";
import MyList from "../components/myList/MyList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
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
    ],
  },
]);

export default router;
