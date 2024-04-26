import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

const Root = () => {
  return (
    <div>
      <div className="md:w-11/12 lg:container mx-auto">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
