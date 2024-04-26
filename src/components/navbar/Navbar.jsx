import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.jpg";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? " text-plt-four underline" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allCrafts"
          className={({ isActive }) =>
            isActive ? " text-plt-four underline" : ""
          }
        >
          All Art & Craft
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addItem"
          className={({ isActive }) =>
            isActive ? " text-plt-four underline" : ""
          }
        >
          Add Craft Items
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myList"
          className={({ isActive }) =>
            isActive ? " text-plt-four underline" : ""
          }
        >
          My Art & Craft List
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="mt-4 container mx-auto text-plt-three font-zilla">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52  text-xl font-semibold z-10"
            >
              {links}
            </ul>
          </div>
          <img className="w-1/4 lg:w-1/3" src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl font-semibold">
            {links}
          </ul>
        </div>
        <div className="navbar-end gap-3 ">
          <div className="flex gap-3">
            <Link to={"/login"}>
              <button className="btn btn-sm bg-plt-four hover:text-plt-five text-lg text-white">
                Login
              </button>
            </Link>
            <p className=" text-xl font-semibold">Or</p>
            <Link to={"/register"}>
              <button className="btn btn-sm bg-plt-four hover:text-plt-five text-lg text-white">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
