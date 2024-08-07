import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../auth/AuthProvider";
import MyListCard from "../myListCard/MyListCard";
import { Link } from "react-router-dom";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const [loader, setLoader] = useState(true);
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
    fetch(
      `https://art-and-craft-server-jn7o6shaj.vercel.app/myPaintings?email=${email}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyPaintings(data);
        setPaintings(data);
        setLoader(false);

        if (customization === "Yes") {
          const customizable = paintings.filter(
            (item) => item.customization === "Yes"
          );
          console.log(customizable);
          setMyPaintings(customizable);
          setLoader(false);
        } else if (customization === "No") {
          const customizable = paintings.filter(
            (item) => item.customization === "No"
          );
          console.log(customizable);
          setMyPaintings(customizable);
          setLoader(false);
        }
      });
  }, [email, customization]);

  return (
    <div>
      {loader ? (
        <div className="flex justify-center items-center h-[70vh]">
          <span className="loading loading-infinity loading-lg"></span>
        </div>
      ) : (
        <div className="w-11/12 lg:container mx-auto">
          {myPaintings.length > 0 && loader === false ? (
            <div>
              <div className="font-zilla">
                <h1 className="text-4xl lg:text-6xl font-heading font-bold text-center my-6">
                  View All Your <span className="text-plt-five">Paintings</span>
                </h1>
                <div className="flex flex-col md:flex-row lg:flex-row gap-6 items-center my-6">
                  <h3 className="text-3xl lg:text-3xl font-heading font-medium">
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
            <div className="min-h-[70vh]  font-zilla flex flex-col justify-center items-start ">
              <h1 className="text-4xl lg:text-6xl font-heading font-bold my-6">
                You have not added any{" "}
                <span className="text-plt-five"> Paintings</span>
              </h1>
              <p className="text-3xl">
                Please add your paintings to view them here. Here&apos;s how:
              </p>
              <div className="text-left mt-4 text-xl">
                <li>
                  Go to{" "}
                  <a
                    className="hover:underline text-blue-500 font-bold"
                    href="https://postimages.org/"
                    target="_blank"
                  >
                    Postimage
                  </a>{" "}
                  and upload your painting.
                </li>
                <li>Copy Direct Link</li>
                <li>
                  Paste the link in the url input field of{" "}
                  <Link
                    className="font-bold text-plt-four hover:underline"
                    to={"/addItem"}
                  >
                    Add Craft Item
                  </Link>
                </li>
                <li>Fill the rest of the form</li>
                <li>Submit the form</li>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MyList;
