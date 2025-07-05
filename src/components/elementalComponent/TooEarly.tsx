import { Link } from "react-router-dom"


const TooEarly = () => {
  return (
    <div className="w-full max-w-[96rem] mx-auto px-4 sm:px-7 md:px-12 xl:px-14 py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 ">
        <div className="bg-[#F5F5F5]  w-full rounded-xl py-16 md:py-20 lg:py-24 xl:py-28 px-5 md:px-8 lg:px-12 lg:rounded-2xl relative overflow-hidden items-center justify-center flex flex-col gap-6 md:gap-7 lg:gap-10">
            <div className="flex flex-col gap-2 md:gap-3 lg:gap-4 xl:gap-5 z-20">

              <h1 className="text-[#2A2A2A] text-center font-[Switzer] text-xl md:text-2xl lg:text-4xl xl:text-4xl font-bold leading-[140%]">You're not too early. You're just early enough.</h1>
              <p className=" text-[#2A2A2A] text-center font-[Switzer] text-sm lg:text-base font-normal leading-[140%]">We help radical founders raise capital the world hasn't seen — yet.</p>
            </div>
            <Link to={"/contact"} className="flex justify-between items-center gap-4 lg:gap-6 xl:gap-7 border-[#2A2A2A] px-6 md:px-6 lg:px-7 py-2 md:py-3 lg:py-3 rounded-[38px] border-2 border-solid z-20 hover:bg-[#2A2A2A] transition-all duration-300 group">
              <p className="text-[#2A2A2A] text-center font-[Switzer] text-base lg:text-lg font-normal leading-[140%] group-hover:text-white transition-colors duration-300">Pitch Us Now</p>
             <p className="group-hover:translate-x-1 transition-transform duration-300">
                 <svg xmlns="http://www.w3.org/2000/svg" width="19" height="15" viewBox="0 0 19 15" fill="none">
  <g clip-path="url(#clip0_1686_3708)">
    <path d="M1.5 7.5H17.5M17.5 7.5L11.5 1.5M17.5 7.5L11.5 13.5" stroke="#2A2A2A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="group-hover:stroke-white transition-colors duration-300"/>
  </g>
  <defs>
    <clipPath id="clip0_1686_3708">
      <rect width="18" height="14" fill="white" transform="translate(0.5 0.5)"/>
    </clipPath>
  </defs>
</svg>
             </p>
            </Link>
            <div className='w-[655px] h-[655px] hidden lg:flex absolute bottom-[-279px] border-[#FFF] bg-[#CAA8EF] blur-[250px] rounded-[655px] border-0 border-solid right-28 z-10'></div>
            <div className="w-[248px] md:hidden h-[248px] absolute right-[-22px] bottom-[-40.801px] bg-[#CAA8EF] blur-[150px]"></div>
            <div className="w-[360px] hidden md:flex  h-[360px] absolute right-[-22px] bottom-[-40.801px] bg-[#CAA8EF] blur-[150px]"></div>
        </div>
    </div>
  )
}

export default TooEarly