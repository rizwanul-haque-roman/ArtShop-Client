import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Mousewheel } from "swiper/modules";
import scroll from "../../assets/scroll.png";

const Banner = () => {
  return (
    <div className="w-11/12 lg:container mx-auto relative">
      <img
        className="w-[76px] absolute z-50 right-2 top-80"
        src={scroll}
        alt=""
      />
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Mousewheel, Autoplay]}
        autoplay={{
          delay: 3000,
        }}
        speed={1800}
        className="mySwiper h-[75vh] my-6 lg:my-12 rounded-3xl font-heading"
      >
        <SwiperSlide>
          <div className="flex justify-between items-center font-zilla h-[75vh] bg-slide-2 bg-center bg-cover bg-no-repeat p-12">
            <div className=" w-1/3">
              <h1 className="text-2xl lg:text-7xl  font-bold text-black my-6">
                Peincil & Pen Sketch Collection
              </h1>
              <p className="text-xl">
                Craving art with raw emotion and intimate detail? Dive into our
                Pencil & Pen Sketch Collection! From the delicate whisper of
                graphite to the bold stroke of ink, these captivating pieces
                capture the essence of a subject, waiting to add a touch of
                timeless charm to your space.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-between items-center font-zilla h-[75vh] bg-slide-1 bg-center bg-cover bg-no-repeat p-12">
            <div className=" w-1/3">
              <h1 className="text-2xl lg:text-7xl  font-bold text-black my-6">
                Abstract Shape Art Collection
              </h1>
              <p className="text-xl">
                Our Abstract Shape Art Collection explodes with vibrant colors
                and dynamic forms. These captivating pieces go beyond
                representation, inviting you to see the world in a new light.
                Discover a conversation starter for your space, or a unique gift
                that sparks wonder.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-between items-center font-zilla h-[75vh] bg-slide-3 bg-center bg-cover bg-no-repeat p-12">
            <div className=" w-1/3">
              <h1 className="text-2xl lg:text-7xl  font-bold text-black my-6">
                Landscpes and Nature Canvas Collection
              </h1>
              <p className="text-xl">
                Unleash the majesty of the outdoors with our Landscapes & Nature
                Canvas Collection! Immerse yourself in breathtaking vistas,
                serene forests, or calming coastlines. Each piece is a window to
                a world of wonder, transforming your space into a tranquil
                escape or a reminder of your next adventure.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-between items-center font-zilla h-[75vh] bg-slide-4 bg-center bg-cover bg-no-repeat p-12">
            <div className=" w-1/3">
              <h1 className="text-2xl lg:text-7xl  font-bold text-black my-6">
                Oil Painting Art Collection
              </h1>
              <p className="text-xl">
                Our Oil Painting Collection offers a window into a world of rich
                colors and captivating textures. Each piece, a testament to the
                timeless beauty of this medium, brings depth, luminosity, and a
                touch of history to your walls.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-between items-center font-zilla h-[75vh] bg-slide-5 bg-center bg-cover bg-no-repeat p-12">
            <div className=" w-1/3">
              <h1 className="text-2xl lg:text-7xl  font-bold text-black my-6">
                Explore Our Collection & grab One
              </h1>
              <p className="text-xl">
                Act fast! Unveiling limited-time discounts on our exquisite
                Drawings & Paintings Collection. Find exceptional works at
                remarkable prices. Add a touch of timeless beauty to your home
                before these offers vanish!
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
