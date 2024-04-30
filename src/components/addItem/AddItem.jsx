import { useContext, useState } from "react";
import { AuthContext } from "../auth/AuthProvider";
import Swal from "sweetalert2";

const AddItem = () => {
  const [subcategory_Name, setSubcategory_Name] = useState("");
  const [customization, setCustomization] = useState("");
  const [stockStatus, setStockStatus] = useState("");
  const { user } = useContext(AuthContext);

  const handleSubCategory = (event) => {
    setSubcategory_Name(event.target.value);
  };

  const handleCustomization = (event) => {
    setCustomization(event.target.value);
  };
  const handleStockStatus = (event) => {
    setStockStatus(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const image = form.image.value;
    const item_name = form.item_name.value;
    const short_description = form.short_description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const processing_time = form.processing_time.value;
    const user_name = form.user_name.value;
    const user_email = form.user_email.value;

    const painting = {
      image,
      item_name,
      subcategory_Name,
      short_description,
      price,
      rating,
      customization,
      processing_time,
      stockStatus,
      user_name,
      user_email,
    };
    console.log(painting);

    // sending data to the serever
    fetch("https://art-and-craft-server-jn7o6shaj.vercel.app/paintings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(painting),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Painting added successfully",
            icon: "success",
            confirmButtonText: "ok",
          });
        }
      });
  };

  return (
    <div className="w-11/12 lg:container mx-auto">
      <div className="font-zilla border-2 border-plt-four shadow-2xl p-6 lg:px-28 lg:py-12 flex flex-col justify-center items-center mb-24 rounded-2xl">
        <h1 className="text-center text-5xl font-bold">
          Publish Your <span className="text-plt-five">ArtWork</span>
        </h1>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row lg:flex-row md:gap-6 lg:gap-8 my-6">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-lg font-semibold">
                  Painting Name
                </span>
              </div>
              <input
                type="text"
                placeholder="What is you painting name?"
                name="item_name"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-lg font-semibold">
                  Sub-Category
                </span>
              </div>
              <select
                onChange={handleSubCategory}
                className="select select-bordered w-full"
              >
                <option disabled selected>
                  What subcategory your painting fall under?
                </option>
                <option value={"Landscape Painting"}>Landscape Painting</option>
                <option value={"Portrait Drawing"}>Portrait Drawing</option>
                <option value={"Watercolour Painting"}>
                  Watercolour Painting
                </option>
                <option value={"Oil Painting"}>Oil Painting</option>
                <option value={"Charcoal Sketching"}>Charcoal Sketching</option>
                <option value={"Cartoon Drawing"}>Cartoon Drawing</option>
              </select>
            </label>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-row md:gap-6 lg:gap-8 my-6">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-lg font-semibold">
                  Short Description
                </span>
              </div>
              <input
                type="text"
                placeholder="Say one or two lines about your painting"
                name="short_description"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-lg font-semibold">Price</span>
              </div>
              <input
                type="number"
                name="price"
                placeholder="Price for your painting? i.e 180"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-row md:gap-6 lg:gap-8 my-6">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-lg font-semibold">Rating</span>
              </div>
              <input
                type="text"
                name="rating"
                placeholder="Rate your painting out of 5. i.e 4.5"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-lg font-semibold">
                  Customization
                </span>
              </div>
              <select
                onChange={handleCustomization}
                className="select select-bordered w-full"
              >
                <option disabled selected>
                  Is it customizable by customer?
                </option>
                <option value={"Yes"}>Yes</option>
                <option value={"No"}>No</option>
              </select>
            </label>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-row md:gap-6 lg:gap-8 my-6">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-lg font-semibold">
                  Processing time
                </span>
              </div>
              <input
                type="text"
                name="processing_time"
                placeholder="Time needed to process the painting. i.e 3-4 weeks"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-lg font-semibold">
                  Stock Status
                </span>
              </div>
              <select
                onChange={handleStockStatus}
                className="select select-bordered w-full"
              >
                <option disabled selected>
                  Available or not?
                </option>
                <option value={"In stock"}>In stock</option>
                <option value={"Made to Order"}>Made to Order</option>
              </select>
            </label>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-row md:gap-6 lg:gap-8 my-6">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-lg font-semibold">
                  User Name
                </span>
              </div>
              <input
                type="text"
                name="user_name"
                defaultValue={user.displayName}
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-lg font-semibold">
                  User Email
                </span>
              </div>
              <input
                type="email"
                name="user_email"
                value={user.email}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div>
            <label className="form-control w-full">
              <div className="label text-lg font-semibold">Painting URL</div>
              <input
                type="text"
                name="image"
                placeholder="Enter painting URL"
                className="input input-bordered w-full"
              />
            </label>
            <div className="my-6 ">
              <button className="btn w-full bg-plt-five text-white text-2xl">
                Add Item
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
