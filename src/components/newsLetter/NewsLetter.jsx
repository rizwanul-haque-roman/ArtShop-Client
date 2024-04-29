const NewsLetter = () => {
  return (
    <div>
      <h1
        className="text-4xl lg:text-5xl text-plt-five font-heading font-bold text-center my-6"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        Subscribe To Our Newsletter
      </h1>
      <div className="col-span-1" data-aos="fade-up" data-aos-duration="1500">
        <p className="text-xl font-medium font-para my-6 lg:w-2/3 mx-auto text-center">
          Join our whitelist and get 15% off <br /> in your first{" "}
          <span className="text-2xl font-bold text-plt-five">
            PAINTING & DRAWING
          </span>{" "}
          purchase!
        </p>
      </div>
      <div className="border-b-2 border-plt-five my-24 flex w-11/12 lg:w-2/3 mx-auto">
        <input
          type="email"
          placeholder="Your email address"
          className="input w-full text-2xl border-0 outline-none py-3 focus:outline-none"
        />
        <button className="btn text-xl bg-plt-four text-white hover:bg-plt-five">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
