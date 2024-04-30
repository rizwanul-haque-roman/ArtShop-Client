import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa6";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div>
      <div
        className="card flex flex-col gap-6 card-side bg-base-100 items-center shadow-xl p-6 border"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <img
          className="rounded-xl"
          src={testimonial.image}
          alt="a painting is a frame"
        />
        <div>
          <h2 className="card-title text-4xl text-plt-five">
            {testimonial.title}
          </h2>
          <p className="text-xl font-bold my-4">Price: ${testimonial.price}</p>
          <p className="text-xl">{testimonial.testimonial}</p>
          <div className="text-xl font-medium mt-6">
            <h3 className="text-xl font-bold">
              {testimonial.customer_name} - {testimonial.designation} -{" "}
              {testimonial.country}
            </h3>
            <div className="flex items-center gap-1">
              <FaStar className="text-[#e79d2e]" />
              <FaStar className="text-[#e79d2e]" />
              <FaStar className="text-[#e79d2e]" />
              <FaStar className="text-[#e79d2e]" />
              <FaStar className="text-[#e79d2e]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

TestimonialCard.propTypes = {
  testimonial: PropTypes.object,
};

export default TestimonialCard;
