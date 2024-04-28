import { Link } from "react-router-dom";
import { TbSquareRoundedArrowLeft } from "react-icons/tb";

const ErrorPage = () => {
  return (
    <div className=" bg-error min-h-screen bg-no-repeat bg-cover bg-center font-zilla">
      <div className="flex flex-col h-screen justify-center items-center pt-[450px]">
        <h1 className="w-11/12 lg:container mx-auto text-4xl lg:text-6xl font-bold ">
          We couldn&apos;t find what you were looking for.
        </h1>
        <Link to={"/"}>
          <div className="text-3xl font-semibold text-center flex flex-col-reverse lg:flex-row justify-center items-center">
            <button className="text-6xl p-6 text-[#F1889A]">
              <TbSquareRoundedArrowLeft />
            </button>
            Go back to home page
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
