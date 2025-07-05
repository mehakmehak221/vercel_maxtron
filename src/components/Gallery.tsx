import React from "react";
import { galleryImages } from "./galleryData";

const Gallery = () => {
  const allImagesToDisplay = [...galleryImages, ...galleryImages];

  return (
    <section className="py-12 md:py-16 lg:py-20 mx-6 md:mx-8 lg:mx-16    overflow-hidden">
      <div className="container mx-auto px-0">
        {" "}
        <div className="animate-marquee whitespace-nowrap flex hover:[animation-play-state:paused]">
          {" "}
          {allImagesToDisplay.map((imageUrl, index) => (
            <div
              key={`gallery-img-${index}`}
              className="inline-block mx-2 sm:mx-3 md:mx-4"
            >
              <div className="w-[161px] h-[ 154px] flex-shrink-0 rounded-xl md:rounded-2xl overflow-hidden shadow-lg ">
                <img
                  src={imageUrl}
                  alt={`Gallery image ${(index % galleryImages.length) + 1}`}
                  className="fill object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Gallery);
