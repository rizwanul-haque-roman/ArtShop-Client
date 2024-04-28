import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../auth/AuthProvider";
import MyListCard from "../myListCard/MyListCard";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const [myPaintings, setMyPaintings] = useState([]);
  const { email } = user;

  useEffect(() => {
    fetch(`http://localhost:3000/myPaintings?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyPaintings(data);
      });
  }, [email]);
  console.log(myPaintings);
  return (
    <div>
      {myPaintings.length > 0 ? (
        <div>
          <div className="font-zilla">
            <h1 className="text-4xl lg:text-6xl text-black  font-heading font-bold text-center my-6">
              View All Your <span className="text-plt-five">Paintings</span>
            </h1>
            <div className="flex gap-6 items-center my-6">
              <h3 className="text-3xl lg:text-3xl text-black  font-heading font-medium">
                Filter by Customization:
              </h3>
              <select className="select select-bordered w-full max-w-xs text-xl">
                <option disabled selected>
                  Customizable by customer?
                </option>
                <option value={"Yes"}>Yes</option>
                <option value={"No"}>No</option>
              </select>
            </div>
            <div className="grid grid-cols-3 gap-6 my-24">
              {myPaintings.map((painting) => (
                <MyListCard
                  key={painting._id}
                  painting={painting}
                  myPaintings={myPaintings}
                  setMyPaintings={setMyPaintings}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-[70vh] font-zilla flex flex-col justify-center items-center ">
          <h1 className="text-4xl lg:text-6xl text-black  font-heading font-bold my-6">
            You have not added any{" "}
            <span className="text-plt-five"> Paintings</span>
          </h1>
          <p className="text-3xl">
            Please add your paintings to view them here
          </p>
        </div>
      )}
    </div>
  );
};

export default MyList;
