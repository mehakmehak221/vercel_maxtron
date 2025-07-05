const LastComponent = () => {
  return (
    <div className="w-full max-w-[96rem] mx-auto flex flex-col gap-6 md:gap-9 lg:gap-12 px-4 sm:px-6 lg:px-10 py-8 md:py-12 lg:py-16">
      <div className='flex w-[90%] md:w-[90%] lg:w-[90%]  max-w-[96rem] mx-auto flex-col h-[14rem] sm:h-[17rem] md:h-[21rem] lg:h-[23rem] xl:h-[28rem] justify-center items-center [background:linear-gradient(0deg,rgba(0,0,0,0.40)_0%,rgba(0,0,0,0.40)_100%),url("./assets/case/Background.webp")_lightgray_50%_/_cover_no-repeat] rounded-lg lg:rounded-xl'>
        <div className="w-full  flex flex-col gap-4 md:gap-6 lg:gap-9">
          <div className="w-[80%] md:w-[70%] lg:w-[60%]  mx-auto">
            <p className=" text-[#FFF] text-center font-[Switzer] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-7 lg:leading-[48px] tracking-[-0.5px] lg:tracking-[-1.44px]">
              Transform real-world assets, tokenize with us
            </p>
          </div>
          <div className="flex w-full max-w-56 md:max-w-72 mx-auto md:w-1/3 lg:w-1/3  justify-center items-center [background:var(--White,#FFF)] shadow-[0px_0px_0px_1px_#C7C7C7_inset] py-[8px] md:py-[10px] lg:py-[13px] px-6 rounded-lg">
            <p
              className="text-black text-center font-[Switzer] text-md lg:text-lg font-semibold leading-5 lg:leading-[21.6px] hover:text-blue-800 hover:cursor-pointer"
              onClick={() =>
                window.open("https://calendly.com/business-maxtron/30min")
              }
            >
              Schedule Introduction
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastComponent;
