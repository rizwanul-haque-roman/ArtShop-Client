import { useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const Details = () => {
  const painting = useLoaderData();
  return (
    <div className="w-11/12 lg:container mx-auto font-zilla">
      <div className="flex justify-center items-end gap-16 my-10">
        <img
          src={painting.image}
          alt=""
          className="rounded-2xl w-1/3 p-12 bg-plt-one"
        />
        <div>
          <h2 className="text-plt-five text-3xl lg:text-6xl font-bold pb-3">
            {painting.item_name}
          </h2>
          <p className=" font-medium text-xl my-2">
            <span className="font-bold text-plt-five">Subcategory:</span>{" "}
            {painting.subcategory_Name}
          </p>
          <p className=" font-medium text-xl">
            <span className="font-bold text-plt-five">Description:</span>{" "}
            {painting.short_description}
          </p>
          <div className="text-xl font-medium mt-3">
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
            <p>
              <span className="font-bold text-plt-five">Customizable:</span>{" "}
              {painting.customization}{" "}
            </p>
            <p>
              <span className="font-bold text-plt-five">Processig Time:</span>{" "}
              {painting.processing_time}{" "}
            </p>
            <p>
              <span className="font-bold text-plt-five">Stock status:</span>{" "}
              {painting.stockStatus}{" "}
            </p>
          </div>
          <div className="mt-6">
            <button className="btn text-xl bg-plt-four hover:bg-plt-five text-white">
              Order a Piece
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
