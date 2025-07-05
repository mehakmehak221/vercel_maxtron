import React from "react";

interface InsightCardProps {
  image: string;
  imageUrl: string;
  category: string;
  title: string;
  authorName: string;
  date: string;
}

const InsightCard: React.FC<InsightCardProps> = ({
  imageUrl,
  category,
  title,
  authorName,
  date,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden p-4">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />

      <div className="p-4">
        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide">
          {category}
        </span>
        <h3 className="text-lg font-semibold mt-2">{title}</h3>
        <div className="flex items-center mt-2">
          <img
            src={imageUrl}
            alt={authorName}
            className="w-8 h-8 rounded-full mr-2"
          />
          <div className="flex items-center space-x-4">
            <p className="text-sm font-medium">{authorName}</p>
            <p className="text-xs text-gray-500">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightCard;
