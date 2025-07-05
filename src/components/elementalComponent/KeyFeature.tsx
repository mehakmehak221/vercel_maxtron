import { Key } from "../VectorImage";

interface KeyFeatureProps {
  keyFeatures: Array<string | { title: string; details: string[] }>;
}

const KeyFeature: React.FC<KeyFeatureProps> = ({ keyFeatures }) => {
  console.log("keyFeatures", keyFeatures);
  return (
    <div className="flex flex-col  w-full mx-auto max-w-[88rem] items-center gap-5 md:gap-8 px-[30px] py-7 md:py-10 lg:py-12">
      <div className="w-full flex items-start justify-start self-start ">
        <p className=" text-[#B1B1B1] [font-family:Switzer] text-xl font-medium leading-[160%] uppercase">
          key features{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 relative lg:grid-cols-3 w-full items-center justify-center">
      <div className="border-[rgba(0,0,0,0.20)] border-solid border-r h-full  absolute left-1/3 hidden lg:flex"></div>
      <div className="border-[rgba(0,0,0,0.20)] border-solid border-r h-full  absolute left-2/3 hidden lg:flex"></div>
      {keyFeatures.map((feature, index) => {
        const itemsPerRow = 3;
        const totalItems = keyFeatures.length;
        const lastRowStartIndex = totalItems - (totalItems % itemsPerRow || itemsPerRow);
        const isInLastRow = index >= lastRowStartIndex;

      

        return (
          <div
            key={index}
            className={`flex  flex-col items-center  justify-center gap-6 px-6 md:px-12 lg:px-20 py-6 md:py-8  border-[rgba(0,0,0,0.20)] border-solid
                ${index % 2 !== 0 ? "lg:pb-32" :"lg:pb-20"}
              ${!isInLastRow ? 'border-b' : 'lg:border-b-0 border-b'}
            
            `}
          >
          
            {index % 2 !== 0 && (
              <div>
                <Key />
              </div>
            )}

            {typeof feature === "string" ? (
              <p className="text-xl text-center">{feature}</p>
            ) : (
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                {feature.details.map((detail, i) => (
                  <p key={i} className="text-lg mb-1">
                    {detail}
                  </p>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>

    </div>
  );
};

export default KeyFeature;
