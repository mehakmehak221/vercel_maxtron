interface ProcessProps {
    processSteps: Array<{
        title: string;
        description: string[];  
      }>;
    
}

const Process :React.FC<ProcessProps> = ({processSteps}) => {
    console.log( "points", processSteps)
  return (
   <div className="flex flex-col  w-full mx-auto max-w-[88rem] items-center gap-5 md:gap-8 px-[30px] py-7 md:py-10 lg:py-12">
   <div className="w-full flex items-start justify-start self-start ">
   <p className=" text-[#B1B1B1] [font-family:Switzer] text-xl font-medium leading-[160%] uppercase">The PROCESS </p>
   </div>
   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-12 w-full">
  {processSteps.map((step, index) => (
    <div key={index} className="flex flex-col gap-6 ">
      
      <div className="flex gap-3 w-full items-center">
        <p className='text-[#3B3C4A] font-openSansHebrew text-[40px] md:text-[80px] font-bold leading-[88%]'>0{index + 1}</p>
        <p className='text-[#3B3C4A] font-openSansHebrew text-[20px] md:text-[32px] font-bold leading-[160%] w-full pb-2 border-b border-[rgba(0,0,0,0.20)]'>{step.title} </p>
      </div>
      {
        step.description.length > 0 ? step.description.map((desc,index)=>(
            <p key={index} className="font-openSansHebrew text-[#3B3C4A] text-base font-normal leading-[160%]">{desc}</p>
        )):<></>
      }
   
    </div>
  ))}
</div>

   </div>
  )
}

export default Process