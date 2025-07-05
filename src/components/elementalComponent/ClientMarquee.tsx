import "react-lazy-load-image-component/src/effects/blur.css";
import React from "react";
import Mercedes from "../../../public/client/mercedes.svg";
import Fitburn from "../../../public/client/fitburn.svg";
import Create from "../../../public/client/createProtocol.svg";
import IndiaToday from "../../../public/client/indiaToday.svg";
import Convival from "../../../public/client/convival.svg";
import Uber from "../../../public/client/uber.svg";
// import Cryptonite from "../../../public/client/cryptonite.svg";
import Tenup from "../../../public/client/tenup.svg";
import PmIndia from "../../../public/client/pmIndia.svg";
import Sc from "../../../public/client/sc.svg";
import Ministry from "../../../public/client/ministry.svg";
import FoodVerse from "../../../public/client/foodVerse.svg";
import GovtHy from "../../../public/client/govtHyryana.svg";
import Ludo from "../../../public/client/ludoLove.svg";
import cadbury from "../../../public/client/cadbury.svg";
import Audi from "../../../public/client/audi.svg";

const clients = [
  { name: "Mercedes", logo: Mercedes },
  { name: "Fitburn", logo: Fitburn },
  { name: "Create Protocol", logo: Create },
  { name: "India Today", logo: IndiaToday },
  { name: "Convival", logo: Convival },
  { name: "Uber", logo: Uber },
  // { name: "Cryptonite", logo: Cryptonite },
  { name: "Tenup", logo: Tenup },
  { name: "PM India", logo: PmIndia },
  { name: "SC", logo: Sc },
  { name: "Ministry", logo: Ministry },
  { name: "FoodVerse", logo: FoodVerse },
  { name: "Govt Haryana", logo: GovtHy },
  { name: "lud", logo: Ludo },
  { name: "cadbury", logo: cadbury },
  { name: "Audi", logo: Audi },
];

const ClientMarquee = () => {
  return (
    <div className="py-6 md:py-8 lg:py-10 xl:py-11 my-6 md:my-7 lg:my-8 xl:my-10">
      <div className="container mx-auto px-4 space-y-3 lg:space-y-4">
        <div className="relative marquee-container">
          <div className="animate-marquee whitespace-nowrap">
            {clients.concat(clients).map((client, index) => (
              <div key={index} className="marquee-item">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-24 md:h-32 lg:h-36 xl:h-40 w-24 md:w-32 lg:w-36 xl:w-40 p-2 md:p-4"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ClientMarquee);
