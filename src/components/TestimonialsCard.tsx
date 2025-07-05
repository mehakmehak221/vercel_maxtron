import React from "react";
import { testimonialsData } from "./testimonialData";
const TestimonialsCard = () => {
  const allTestimonialsToDisplay = [...testimonialsData, ...testimonialsData];

  return (
    <div className="py-0 my-2">
      {" "}
      <div className="animate-marquee whitespace-nowrap flex hover:[animation-play-state:paused] ">
        {allTestimonialsToDisplay.map((testimonial, index) => (
          <div
            key={`${testimonial.id}-marquee-${index}`}
            className="inline-block mx-3 md:mx-4 flex-shrink-0 "
          >
            <div className=" border  rounded-2xl p-6 w-[300px] sm:w-[340px] md:w-[370px] min-h-[240px] sm:min-h-[250px] flex flex-col transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(190,147,245,0.15)] transform hover:-translate-y-0.5 ">
              <span
                className="absolute top-6 text-[10px] font-medium px-2.5 py-1 rounded-md whitespace-nowrap"
                style={{
                  color: testimonial.tagColor || "#7A35C1",
                  backgroundColor: testimonial.tagColor
                    ? `${testimonial.tagColor}1A`
                    : "rgba(190, 147, 245, 0.1)",
                }}
              >
                {testimonial.tag}
              </span>
              <div className="flex items-start justify-between mt-10 mb-4 gap-2 relative ">
                <div className="flex items-center space-x-3 flex-1 min-w-0 ">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 md:w-11 md:h-11 rounded-full border-2 border-brand-purple-accent object-cover flex-shrink-0"
                  />
                  <div className="min-w-0 text-left">
                    <h4 className="text-lg font-normal font-[Switzer] truncate">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-[#79748A] whitespace-normal [font-family: openSansHebrew]">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm leading-relaxed text-[open] flex-grow text-left whitespace-normal [font-family: openSansHebrew] font-normal">
                {testimonial.testimonial}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(TestimonialsCard);
