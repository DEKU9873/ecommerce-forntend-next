import { Star } from "lucide-react";

const StarRating = ({ rating, size=18 }: { rating: number; size?: number }) => {
  const stars = new Array(rating).fill(0);

  return (
    <div className="flex gap-1">
      {stars.map((_, index) => (
        <Star size={size} key={index} className="text-yellow-400 fill-yellow-400" />
      ))}
    </div>
  );
};

export default StarRating;