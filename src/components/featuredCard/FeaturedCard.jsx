import Aos from "aos";
import "aos/dist/aos.css";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const FeaturedCard = ({ painting }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  //   console.log(painting.item_name);
  return (
    <div>
      <div
        className="card flex flex-col lg:flex-row gap-6 card-side bg-base-100 items-center shadow-xl p-6 border"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <img
          className="lg:w-1/3 lg:mr-6"
          src={painting.image}
          alt="a painting is a frame"
        />

        <div>
          <h2 className="card-title text-4xl text-plt-five">
            {painting.item_name}
          </h2>
          <p className="text-xl">{painting.short_description}</p>
          <div className="text-xl font-medium mt-6">
            <p>Price: ${painting.price}</p>
            <div className="flex items-center gap-1">
              <p>Rating: {painting.rating}</p>
              <FaStar className="text-[#e79d2e]" />
            </div>
            <p>customizable: {painting.customization} </p>
          </div>
          <div className="card-actions justify-end">
            <Link to={`/details/${painting._id}`}>
              <button className="btn text-xl bg-plt-four hover:bg-plt-five text-white">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

FeaturedCard.propTypes = {
  painting: PropTypes.object,
};

export default FeaturedCard;
