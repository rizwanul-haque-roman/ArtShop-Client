import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import CategoriesCard from "../categoriesCard/CategoriesCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SubCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/subCategories")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategories(data);
        setLoader(false);
      });

    Aos.init();
  }, []);

  console.log(categories);

  const settings_lg = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const settings_sm = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="my-24">
      {loader ? (
        <span className="loading loading-infinity loading-lg"></span>
      ) : (
        <div className="w-11/12 lg:container mx-auto mt-6 lg:mt-24">
          <h1
            className="text-4xl lg:text-5xl text-plt-five font-heading font-bold text-center my-6"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            Art & Craft Categories
          </h1>
          <div
            className="col-span-1"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <p className="text-xl font-medium font-para my-6 lg:w-2/3 mx-auto text-center">
              Browse different categories of art & crafts! Discover captivating
              paintings and drawings. Browse through all the collections to find
              your perfect piece.
            </p>
          </div>
          <div
            className="slider-container hidden lg:block"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <Slider {...settings_lg}>
              {categories.map((categorie) => (
                <CategoriesCard
                  key={categorie._id}
                  category={categorie}
                ></CategoriesCard>
              ))}
            </Slider>
          </div>
          <div className="display lg:hidden">
            <div
              className="slider-container"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <Slider {...settings_sm}>
                {categories.map((categorie) => (
                  <CategoriesCard
                    key={categorie._id}
                    category={categorie}
                  ></CategoriesCard>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubCategories;
