import Aos from "aos";
import "aos/dist/aos.css";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { FaStar } from "react-icons/fa";

const FeaturedCard = ({ painting }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  //   console.log(painting.item_name);
  return (
    <div>
      <div
        className="card card-side bg-base-100 items-center shadow-xl p-6 border"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <img
          className="w-1/3 mr-6"
          src={painting.image}
          alt="a painting is a frame"
        />

        <div className=" ">
          <h2 className="card-title text-4xl text-plt-five">
            {painting.item_name}
          </h2>
          <p className="text-xl">{painting.short_description}</p>
          <div className="text-xl font-medium mt-6">
            <p>Price: ${painting.price}</p>
            <div className="flex items-center gap-1">
              <p>Rating: {painting.rating}</p>
              <FaStar />
            </div>
            <p>customizable: {painting.customization} </p>
          </div>
          <div className="card-actions justify-end">
            <button className="btn text-xl bg-plt-four hover:bg-plt-five text-white">
              View Details
            </button>
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
