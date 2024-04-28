import { useState } from "react";

const AddItem = () => {
  const [subcategory_Name, setSubcategory_Name] = useState("");
  const [customization, setCustomization] = useState("");
  const [stockStatus, setStockStatus] = useState("");

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

    // send data to the serever
  };

  return (
    <div className="container mx-auto">
      <div className="font-zilla bg-plt-one px-28 py-12 flex flex-col justify-center items-center mb-24 rounded-2xl">
        <h1 className="text-center text-5xl font-bold">
          Publish Your <span className="text-plt-five">ArtWork</span>
        </h1>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="flex gap-8 my-6">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Painting Name</span>
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
                <span className="label-text">Sub-Category</span>
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
          <div className="flex gap-8 my-6">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Short Description</span>
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
                <span className="label-text">Price</span>
              </div>
              <input
                type="number"
                name="price"
                placeholder="Price for your painting? i.e 180"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="flex gap-8 my-6">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Rating</span>
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
                <span className="label-text">Customization</span>
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
          <div className="flex gap-8 my-6">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Processing time</span>
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
                <span className="label-text">Stock Status</span>
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
          <div className="flex gap-8 my-6">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">User Name</span>
              </div>
              <input
                type="text"
                name="user_name"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">User Email</span>
              </div>
              <input
                type="email"
                name="user_email"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div>
            <label className="form-control w-full">
              <div className="label">Painting URL</div>
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
