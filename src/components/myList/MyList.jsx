import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../auth/AuthProvider";
import MyListCard from "../myListCard/MyListCard";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const [myPaintings, setMyPaintings] = useState([]);
  const [paintings, setPaintings] = useState([]);
  const { email } = user;
  const [customization, setCustomization] = useState("");

  const handleChange = (event) => {
    setCustomization(event.target.value);
  };

  console.log(customization);
  console.log("paintings:", paintings);

  useEffect(() => {
    fetch(`http://localhost:3000/myPaintings?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyPaintings(data);
        setPaintings(data);

        if (customization === "Yes") {
          const customizable = paintings.filter(
            (item) => item.customization === "Yes"
          );
          console.log(customizable);
          setMyPaintings(customizable);
        } else if (customization === "No") {
          const customizable = paintings.filter(
            (item) => item.customization === "No"
          );
          console.log(customizable);
          setMyPaintings(customizable);
        }
      });
  }, [email, customization]);

  return (
    <div className="w-11/12 lg:container mx-auto">
      {myPaintings.length > 0 ? (
        <div>
          <div className="font-zilla">
            <h1 className="text-4xl lg:text-6xl text-black  font-heading font-bold text-center my-6">
              View All Your <span className="text-plt-five">Paintings</span>
            </h1>
            <div className="flex flex-col md:flex-row lg:flex-row gap-6 items-center my-6">
              <h3 className="text-3xl lg:text-3xl text-black  font-heading font-medium">
                Filter by Customization:
              </h3>
              <select
                onChange={handleChange}
                className="select select-bordered w-full max-w-xs text-xl"
              >
                <option disabled selected>
                  Customizable by customer?
                </option>
                <option value={"Yes"}>Yes</option>
                <option value={"No"}>No</option>
              </select>
            </div>
            <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-24">
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
        <div className="min-h-[70vh]  font-zilla flex flex-col justify-center items-center ">
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
