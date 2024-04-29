import { useLoaderData } from "react-router-dom";

const SubCategoryCollection = () => {
  const subcategory = useLoaderData();
  console.log(subcategory);

  return (
    <div>
      <div className="font-zilla w-11/12 lg:container mx-auto">
        <h1 className="text-4xl lg:text-6xl text-black  font-heading font-bold text-center my-6">
          View All The Arts of{" "}
          <span className="text-plt-five">
            {subcategory[0].subcategory_Name}
          </span>
        </h1>
        <p className="text-2xl font-medium font-para my-6 lg:w-2/3 mx-auto text-center">
          Browse all the paintings of{" "}
          <span className="text-plt-five font-bold text-3xl">
            {subcategory[0].subcategory_Name}
          </span>{" "}
          subcategory from different artists.
        </p>
      </div>
    </div>
  );
};

export default SubCategoryCollection;
