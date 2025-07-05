import { Verify } from "./VectorImage";
import TestimonialsCard from "./TestimonialsCard";

const Testimonials = () => {
  return (
    <section
      id="about-us"
      className="relative py-4 md:py-8 lg:py-11 xl:py-12 text-center bg-white max-w-[96rem] mx-auto "
    >
      <div className="p-4 ">
        <p className="text-xs md:text-sm flex items-center justify-center text-center text-[#7A35C1]">
          <Verify />
          TESTIMONIALS
        </p>
        <h2 className="text-2xl lg:text-3xl font-bold text-[#2A2A2A]  font-[Switzer]">
          Our Believers And Supporters
        </h2>
        <p className="md:mb-10 lg:mb-14 xl:mb-16  text-[#79748A] [font-family: openSansHebrew] text-lg">
          Find out how our clients are spreading the word!
        </p>
      </div>

      <div className="mx-6 md:mx-8 lg:mx-16  overflow-hidden">
        <TestimonialsCard />
      </div>
    </section>
  );
};

export default Testimonials;
