import { useLoaderData } from "react-router-dom";
import Banner from "../banner/Banner";
import CraftItems from "../craftItems/CraftItems";
import SubCategories from "../subCategories/SubCategories";
import Testimonials from "../testimonials/Testimonials";
import NewsLetter from "../newsLetter/NewsLetter";

const Home = () => {
  const paintings = useLoaderData();
  return (
    <div className="font-zilla">
      <Banner />
      <CraftItems paintings={paintings} />
      <SubCategories />
      <Testimonials />
      <NewsLetter />
    </div>
  );
};

export default Home;
