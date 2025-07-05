import img1 from '../../assets/insights/img1.png'
import img2 from '../../assets/insights/img2.png'
import img3 from '../../assets/insights/img3.png'
import img4 from '../../assets/insights/img4.png'
import img5 from '../../assets/insights/img5.png'
import img6 from '../../assets/insights/img6.png'
import img7 from '../../assets/insights/img7.png'
import img8 from '../../assets/insights/img8.png'
import img9 from '../../assets/insights/Rectangle 38 (8).png'
import person1 from '../../assets/insights/person1.png'
import person2 from '../../assets/insights/person2.png'
import person3 from '../../assets/insights/person3.png'
import person4 from '../../assets/insights/person4.png'
import person5 from '../../assets/insights/person5.png'
import person from '../../assets/insights/person.png'



const Insights = () => {

  const cardData = [
    {
      img: img1,
      subheading: "Technology",
      heading: "The Impact of Technology on the Workplace: How Technology is Changing",
      personImg: person1,
      personName: "Tracey Wilson",
      date: "August 20, 2022",
    },
    {
      img: img2,
      subheading: "Technology",
      heading: "The Impact of Technology on the Workplace: How Technology is Changing",
      personImg: person2,
      personName: "Jason Francisco",
      date: "August 20, 2022",
    },
    {
      img: img3,
      subheading: "Technology",
      heading: "The Impact of Technology on the Workplace: How Technology is Changing",
      personImg: person3,
      personName: "Elizabeth Slavin",
      date: "August 20, 2022",
    },
    {
      img: img4,
      subheading: "Technology",
      heading: "The Impact of Technology on the Workplace: How Technology is Changing",
      personImg: person4,
      personName: "Ernie Smith",
      date: "August 20, 2022",
    },
    {
      img: img5,
      subheading: "Technology",
      heading: "The Impact of Technology on the Workplace: How Technology is Changing",
      personImg: person5,
      personName: "Eric Smith",
      date: "August 20, 2022",
    },
    {
      img: img6,
      subheading: "Technology",
      heading: "The Impact of Technology on the Workplace: How Technology is Changing",
      personImg: person1,
      personName: "Tracey Wilson",
      date: "August 20, 2022",
    },
    {
      img: img7,
      subheading: "Technology",
      heading: "The Impact of Technology on the Workplace: How Technology is Changing",
      personImg: person2,
      personName: "Person Name 2",
      date: "August 20, 2022",
    },
    {
      img: img8,
      subheading: "Technology",
      heading: "The Impact of Technology on the Workplace: How Technology is Changing",
      personImg: person3,
      personName: "Jason Francisco",
      date: "August 20, 2022",
    },
    {
      img: img9,
      subheading: "Technology",
      heading: "The Impact of Technology on the Workplace: How Technology is Changing",
      personImg: person4,
      personName: "Elizabeth Slavin",
      date: "August 20, 2022",
    },
  ];

  return (
    <div>
      <div className="h-14"></div>
      <div className="relative z-10 text-left insights_hero_img">
        <p className="text-white mb-2 bg-black w-fit px-2 py-1 rounded-lg">
          Technology
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold pt-4">
          The Impact of Technology on the <br />
          Workplace: How Technology is Changing
        </h1>

        <div className="flex items-center py-8">
          <img
            src={person}
            alt={`Person `}
            className="md:w-10 md:h-10 w-8 h-8 rounded-full mr-2"
          />
          <p className="text-white text-lg pl-2">Tracey Wilson</p>
          <p className="text-white text-lg pl-4">August 20, 2022</p>
        </div>
      </div>


      <div className="container m-auto grid grid-cols-2 md:grid-cols-3 gap-4 p-4 md:p-8">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg my-4 p-2 md:p-4 transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={card.img}
              alt={`Card Image ${index + 1}`}
              className="w-full rounded-lg mb-4"
            />
            <p className="text-[#C07061] mb-2 bg-[#F5F5F5] text-xs md:text-[16px] w-fit px-2 py-1 rounded-lg">
              {card.subheading}
            </p>
            <h3 className="md:text-xl text-sm font-bold mb-4">{card.heading}</h3>
            <div className="flex items-center">
              <img
                src={card.personImg}
                alt={`Person ${index + 1}`}
                className="md:w-10 md:h-10 w-8 h-8 rounded-full mr-2"
              />
              <p className="text-gray-500 md:text-[16px] text-xs">{card.personName}</p>
              <p className="text-gray-500 md:text-[16px] text-xs">{card.date}</p>
            </div>
          </div>
        ))}
      </div>


      <div className="relative z-10 text-center mb-14">
        <button className=" border-black border-[4px] text-sm md:text-[16px] font-bold px-5 py-3 rounded-xl ">
          Load More
        </button>

      </div>
    </div>
  )
}

export default Insights