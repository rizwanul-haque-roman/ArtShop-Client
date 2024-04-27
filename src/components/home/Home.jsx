import { useLoaderData } from "react-router-dom";
import Banner from "../banner/Banner";
import CraftItems from "../craftItems/CraftItems";

const Home = () => {
  const paintings = useLoaderData();
  return (
    <div className="font-zilla">
      <Banner />
      <CraftItems paintings={paintings} />
    </div>
  );
};

export default Home;
