import { FaStar } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";

const AllCrafts = () => {
  const paintings = useLoaderData();
  return (
    <div className="overflow-x-auto my-24 border-2 border-plt-five rounded-2xl p-6 font-zilla">
      <table className="table">
        {/* head */}
        <thead>
          <tr className=" text-xl text-plt-five">
            <th>SL NO</th>
            <th>Preview</th>
            <th>Name</th>
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
  );
};

export default AllCrafts;
