interface ProblemProps {
    heading:string
    subheading? :string;
    points?: string[];
    
}

const Problem :React.FC<ProblemProps> = ({heading,subheading,points}) => {
    console.log( "points", points)
  return (
   <div className="flex flex-col md:flex-row w-full mx-auto max-w-[88rem] items-center gap-5 px-[30px] py-7 md:py-10 lg:py-12">
   <div className="w-full md:w-1/4 flex items-start justify-start self-start ">
   <p className=" text-[#B1B1B1] [font-family:Switzer] text-xl font-medium leading-[160%] uppercase">The {heading}</p>
   </div>
  <div className="flex-1 flex items-start w-full flex-col gap-5">
    {subheading && (
        <p className="font-openSansHebrew text-lg md:text-xl font-bold  tracking-[0.02em] leading-[160%]">
{subheading}
        </p>
    )}
    <p className="font-openSansHebrew text-gray-700 text-lg md:text-xl tracking-[0.02em] leading-[160%]">

     {points?.join(" ")}
    </p>
  </div>
   </div>
  )
}

export default Problem