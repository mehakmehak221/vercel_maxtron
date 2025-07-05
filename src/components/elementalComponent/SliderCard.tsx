interface SliderCardProps {
  image: string;
  name: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
}

const SliderCard: React.FC<SliderCardProps> = ({
  image,
  name,
  title,
  category,
  description,
}) => {
  return (
    <div className="bg-white p-4 md:px-6 py-8 space-y-4 h-80  max-w-96 md:h-80 text-left rounded-3xl shadow-lg">
      <div className="flex ">
        <div className=" pr-2 md:pr-4">
          <img src={image} alt={title} className=" rounded-full mx-auto" />
        </div>
        <div className=" w-[60%] mt-2 flex flex-col">
          <h3 className="text-sm text-left md:text-xl font-medium font-OpenSans text-[#4E009C]">
            {name}
          </h3>{" "}
          <p className="text-xs md:text-sm text-[#4E009C]">{title}</p>
        </div>
      </div>

      <p className="p-2 rounded text-xs md:text-sm font-OpenSans font-medium text-[#4B6BFB] bg-[#4B6BFB0D] max-w-fit">
        {category}
      </p>
      <p className="text-left md:px-2 text-xs md:text-sm font-semibold normal-case font-OpenSans text-[#4E009C]">
        {description}
      </p>
    </div>
  );
};

export default SliderCard;
