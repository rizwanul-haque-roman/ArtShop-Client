import { useEffect, useState } from "react";
import TestimonialCard from "../testimonilCard/TestimonialCard";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/testimonial")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);
  return (
    <div>
      <div className="w-11/12 lg:container mx-auto">
        <h1
          className="text-4xl lg:text-5xl text-plt-five font-heading font-bold text-center my-6"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          Testimonials
        </h1>
        <div className="col-span-1" data-aos="fade-up" data-aos-duration="1500">
          <p className="text-xl font-medium font-para my-6 lg:w-2/3 mx-auto text-center">
            Check out what people been saying about the paintings they got from
            us.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-12 lg:my-24">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial._id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
