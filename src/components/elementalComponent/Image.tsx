import freedom from "../../assets/case/freedom.webp";

const Image = () => {
  return (
    <div className="w-full relative ">
      <div className="w-full bg-[#7A35C1] h-2 sm:h-4 md:h-10 lg:h-16 xl:h-20"></div>

      <div className="absolute w-full flex justify-center -top-8 md:-top-10 lg:-top-16 xl:-top-20  z-20 ">
        <img
          src={freedom}
          alt="freedom"
          className="rounded-lg lg:rounded-2xl w-[80%] max-w-6xl h-auto"
        />
      </div>
      <div className="w-full bg-[#fff] h-28 sm:h-32 md:h-40 lg:h-44 xl:h-52"></div>
    </div>
  );
};

export default Image;
