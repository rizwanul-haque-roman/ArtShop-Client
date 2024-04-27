import PropTypes from "prop-types";
import FeaturedCard from "../featuredCard/FeaturedCard";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const CraftItems = ({ paintings }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="w-11/12 lg:container mx-auto mt-6 lg:mt-24">
      <h1
        className="text-4xl lg:text-5xl font-heading font-bold text-center my-6"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        Featured Art & Craft Items
      </h1>
      <div className="col-span-1" data-aos="fade-up" data-aos-duration="1500">
        <p className="text-xl font-medium font-para my-6 w-2/3 mx-auto text-center">
          Browse our curated selection of art & crafts! Discover captivating
          paintings and drawings. Find the perfect gift for your home or someone
          special.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6 my-24">
        {paintings.map((painting) => (
          <FeaturedCard key={painting._id} painting={painting}></FeaturedCard>
        ))}
      </div>
    </div>
  );
};

CraftItems.propTypes = {
  paintings: PropTypes.array,
};

export default CraftItems;
