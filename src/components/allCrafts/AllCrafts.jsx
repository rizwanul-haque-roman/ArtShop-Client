import { FaStar } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const AllCrafts = () => {
  const paintings = useLoaderData();
  return (
    <div>
      <div className="font-zilla">
        <h1 className="text-4xl lg:text-6xl text-black  font-heading font-bold text-left my-6">
          View All of Our{" "}
          <span className="text-plt-five">
            <Typewriter
              words={[
                "Watercolour Paintings",
                "Portrait Drawings",
                "Charcoal Sketchings",
                "Landscape Paintings",
                "Oil Paintings",
                "Cartoon Drawings",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <p className="text-2xl font-medium font-para my-6 w-2/3 text-left">
          Browse all the paintings from different artists. Discover a variety of
          styles, from landscapes to abstracts, to find your perfect piece or
          ignite your artistic spark.
        </p>
      </div>
      <div className="overflow-x-auto my-24 border-2 border-plt-five rounded-2xl p-6 font-zilla">
        <table className="table">
          {/* head */}
          <thead>
            <tr className=" text-xl text-plt-five">
              <th>SL NO</th>
              <th>Preview</th>
              <th>Name</th>
              <th>Publisher</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {paintings.map((painting, idx) => (
              <tr key={painting._id} className="text-lg">
                <th>{idx + 1}</th>
                <td>
                  <img className="h-[10vh]" src={painting.image} alt="" />
                </td>
                <td>{painting.item_name}</td>
                <td>{painting.user_name}</td>
                <td>${painting.price}</td>
                <td>
                  <div className="flex items-center gap-1">
                    <p>{painting.rating}</p>
                    <FaStar className="text-[#e79d2e]" />
                  </div>
                </td>
                <td>
                  <Link to={`/details/${painting._id}`}>
                    <button className="btn btn-sm bg-plt-four hover:bg-plt-five text-white">
                      View Details
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCrafts;
