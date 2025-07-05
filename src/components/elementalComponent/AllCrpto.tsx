import tokenize5 from "../../assets/case/tokenize5.png";
import tokenize6 from "../../assets/case/tokenize6.png";
import tokenize7 from "../../assets/case/tokenize7.png";
import tokenize8 from "../../assets/case/tokenize8.png";
import tokenize9 from "../../assets/case/tokenize9.png";

const items = [tokenize5, tokenize6, tokenize7, tokenize8, tokenize9];

const AllCrpto = () => {
  return (
    <div className=" flex items-center justify-center gap-4 md:gap-5 lg:gap-7">
      {items.map((item, index) => (
        // <div key={index}>
        //   <img src={item} alt="item" className="w-10 lg:w-12 h-10 lg:h-12" />
        // </div>
        <div key={index}>
          <img src={item} alt="item" className="w-10 lg:w-12 h-10 lg:h-12" />
        </div>
      ))}
    </div>
  );
};

export default AllCrpto;
