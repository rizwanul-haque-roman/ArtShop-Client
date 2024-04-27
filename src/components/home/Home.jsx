import { useLoaderData } from "react-router-dom";
import Banner from "../banner/Banner";
import CraftItems from "../craftItems/CraftItems";
import SubCategories from "../subCategories/SubCategories";

const Home = () => {
  const paintings = useLoaderData();
  return (
    <div className="font-zilla">
      <Banner />
      <CraftItems paintings={paintings} />
      <SubCategories />
    </div>
  );
};

export default Home;
