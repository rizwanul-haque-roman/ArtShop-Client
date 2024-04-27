import logo from "../../assets/icon.png";
import {
  FaSquareFacebook,
  FaGithub,
  FaXTwitter,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-base-200 font-zilla">
      <footer className="footer items-center text-lg container py-10 mx-auto bg-base-200 text-base-content">
        <aside>
          <img className="w-1/2" src={logo} alt="" />
          <h4 className="text-3xl font-bold">Art Shop</h4>
          <p>Trusted for delivering quality Arts</p>
          <div className="flex gap-6 my-6 text-3xl ">
            <a href="#">
              <FaSquareFacebook />
            </a>
            <a href="#">
              <FaGithub />
            </a>
            <a href="#">
              <FaXTwitter />
            </a>
          </div>
        </aside>
        <nav>
          <h6 className="footer-title">Important links</h6>
          <Link className="link link-hover" to={"/"}>
            Home
          </Link>
          <Link className="link link-hover" to={"/allCrafts"}>
            Art & Crafts
          </Link>
          <Link className="link link-hover" to={"/addItem"}>
            Add Craft items
          </Link>
          <Link className="link link-hover" to={"/myList"}>
            My Art & Craft List
          </Link>
        </nav>
        <div className=" text-lg">
          <h6 className="footer-title">Contacts</h6>
          <div className="flex items-center gap-2">
            <FaLocationDot />
            <p>
              Shop #3F/3 (3rd Floor), Polwel Super Market, <br /> 69/2 Naya
              Paltan, Dhaka 1000, Bangladesh
            </p>
          </div>
          <div className="flex items-center gap-2">
            <MdEmail /> <p>crafts@shop.com.bd</p>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone />
            <p>+880 186 373 9994</p>
          </div>
        </div>
      </footer>
      <hr />
      <footer className="footer footer-center p-4 bg-base-200 text-base-content font-zilla font-medium text-xl">
        <aside>
          <p>Copyright © 2024 - All rights reserved by Art Shop</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
