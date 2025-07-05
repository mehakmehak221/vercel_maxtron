// src/components/Statistics.js

import CountUp from "react-countup";
import React from "react";

const Statistics = () => {
  const stats = [
    { id: 1, number: 11, label: "Years of Experience" },
    { id: 2, number: 12, suffix: "+", label: "Countries World Wide" },
    { id: 3, number: 100, suffix: "+", label: "Business Partners" },
    { id: 4, number: 3000, suffix: "+", label: "Products Delivered" },
    { id: 5, number: 5, label: "Industry Awards" },
  ];

  return (
    <div className="py-20 text-center">
      <h2 className="text-2xl md:text-4xl font-bold mb-16 text-black">
        We Take Pride In Our Numbers
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {stats.map((stat) => (
          <div key={stat.id} className="text-center">
            <CountUp
              start={0}
              end={stat.number}
              duration={2.5}
              separator=","
              suffix={stat.suffix || ""}
              className="text-4xl md:text-6xl font-bold text-purple-600"
            />
            <p className="mt-2 text-lg md:text-xl text-purple-700">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Statistics);
