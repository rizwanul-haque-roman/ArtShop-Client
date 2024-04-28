import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const MyListCard = ({ painting }) => {
  return (
    <div>
      <div className="card w-auto h-[65vh] flex flex-col justify-between gap-6 card-side bg-base-100 shadow-xl p-6 border">
        <img
          className=" rounded-xl"
          src={painting.image}
          alt="a painting is a frame"
        />
        <div>
          <h2 className="card-title text-4xl text-plt-five">
            {painting.item_name}
          </h2>
          <div className="text-xl font-medium mt-4">
            <p>
              <span className="font-bold text-plt-five">Customizable:</span>{" "}
              {painting.customization}{" "}
            </p>
            <p>
              <span className="font-bold text-plt-five">Stock Status:</span>{" "}
              {painting.stockStatus}{" "}
            </p>
            <div className="flex gap-6">
              <p>
                <span className="font-bold text-plt-five">Price:</span> $
                {painting.price}
              </p>
              <div className="flex items-center gap-1">
                <p>
                  <span className="font-bold text-plt-five">Rating:</span>{" "}
                  {painting.rating}
                </p>
                <FaStar className="text-[#e79d2e]" />
              </div>
            </div>
          </div>
          <div className="card-actions justify-start mt-4">
            <Link to={`/update/${painting._id}`}>
              <button className="btn text-xl bg-plt-four hover:bg-plt-five text-white">
                Update
              </button>
            </Link>
            <button className="btn text-xl bg-[red] hover:bg-[#b61212] text-white">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

MyListCard.propTypes = {
  painting: PropTypes.object,
};

export default MyListCard;
