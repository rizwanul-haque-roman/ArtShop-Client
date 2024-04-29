import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CategoriesCard = ({ category }) => {
  return (
    <div className="my-8">
      <div className="card w-auto bg-base-100 shadow-xl border">
        <figure className="p-6">
          <img src={category.image} alt="paintings" className="rounded-xl" />
        </figure>
        <div className="card-body text-left">
          <h2 className="card-title text-3xl font-bold">
            {category.subcategory_name}
          </h2>
          <p>{category.origin}</p>
          <div className="card-actions">
            <Link to={`/subcategory/${category.subcategory_name} `}>
              {/* ${category.subcategory_name} */}
              <button className="btn text-xl bg-plt-four hover:bg-plt-five text-white">
                Browse Collection
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

CategoriesCard.propTypes = {
  category: PropTypes.object,
};
export default CategoriesCard;
