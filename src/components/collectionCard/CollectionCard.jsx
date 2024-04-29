import Aos from "aos";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CollectionCard = ({ painting }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="w-11/12 lg:container mx-auto">
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
          <p className="text-2xl font-bold">{painting.subcategory_Name} </p>
          <p className="text-xl py-3">{painting.short_description}</p>
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-6 text-xl mt-3">
            <p>
              <span className="font-bold text-plt-four">Price:</span> $
              {painting.price}
            </p>
            <div className="flex items-center gap-1">
              <p>
                <span className="font-bold text-plt-four">Rating:</span>{" "}
                {painting.rating}
              </p>
              <FaStar className="text-[#e79d2e]" />
            </div>
            <p>
              <span className="font-bold text-plt-four">Processing Time:</span>{" "}
              {painting.processing_time}{" "}
            </p>
          </div>
          <div className="card-actions mt-6">
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

CollectionCard.propTypes = {
  painting: PropTypes.object,
};

export default CollectionCard;
