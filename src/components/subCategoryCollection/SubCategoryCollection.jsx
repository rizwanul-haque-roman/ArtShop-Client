import PropTypes from "prop-types";

const SubCategoryCollection = ({ subCategory }) => {
  return (
    <div>
      <h1>
        This is sub category collection. sub category name is {subCategory}
      </h1>
    </div>
  );
};

SubCategoryCollection.propTypes = {
  subCategory: PropTypes.string,
};

export default SubCategoryCollection;
