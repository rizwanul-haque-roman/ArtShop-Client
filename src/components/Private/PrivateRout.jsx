import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { AuthContext } from "../auth/AuthProvider";

const PrivateRout = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation();

  if (loader) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to={"/login"} />;
};

export default PrivateRout;
PrivateRout.propTypes = {
  children: PropTypes.node,
};
