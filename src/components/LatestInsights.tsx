import React from "react";
import InsightCard from "./elementalComponent/InsightCard";
// import { Link } from "react-router-dom";
import profile from "../../assets/profile.svg";
// import profile from "../../assets/profile.svg";

const insightsData = [
  {
    image: profile,
    imageUrl: profile,
    category: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    authorName: "Tracey Wilson",
    date: "July 02, 2024",
  },
  {
    image: profile,
    imageUrl: profile,
    category: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    authorName: "Jason Francisco",
    date: "July 02, 2024",
  },
  {
    image: profile,
    imageUrl: profile,
    category: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    authorName: "Elizabeth Slavin",
    date: "July 02, 2024",
  },
];

const LatestInsights: React.FC = () => {
  return (
    <section className="py-12 px-4 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-black mb-8">Latest Insights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {insightsData.map((insight, index) => (
            <InsightCard
              key={index}
              image={insight.image}
              imageUrl={insight.imageUrl}
              category={insight.category}
              title={insight.title}
              authorName={insight.authorName}
              date={insight.date}
            />
          ))}
        </div>
        {/* <div className="mt-8">
          <Link to="/posts" className="text-white underline">
            View All Posts &gt;
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default React.memo(LatestInsights);
