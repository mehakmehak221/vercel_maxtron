import React from 'react';

type Props = {
  keyFeaturesImage: string[];
};

const ImageSection: React.FC<Props> = ({ keyFeaturesImage }) => {
  const isThreeImages = keyFeaturesImage.length === 3;

  return (
    <div className="mx-4">
      <div className="flex flex-col bg-white rounded-3xl w-full 2xl:mx-auto max-w-[88rem] px-[30px] md:px-[50px] lg:px-[70px] py-2 md:py-3 lg:py-4">
        <div
          className={`grid grid-cols-1 gap-4 w-full items-center ${
            isThreeImages ? 'lg:grid-cols-3' : 'md:grid-cols-2'
          }`}
        >
          {keyFeaturesImage.map((src, index) => (
            <div key={index} className="w-full">
              <img
                src={src}
                alt={`Key Feature ${index + 1}`}
                className={`w-full h-auto ${isThreeImages ? "max-h-[360px]":"max-h-[500px]"} rounded-xl object-contain`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
