import { FaStar, FaRegStar } from "react-icons/fa";

const StarRating = ({ rating }) => {
  // Generate an array of 5 elements, filling with filled stars first, then empty stars
  const stars = Array(5)
    .fill(0)
    .map((_, index) =>
      index < rating ? (
        <FaStar key={index} color="#f6b100" />
      ) : (
        <FaRegStar key={index} color="#f6b100" />
      )
    );

  return <div className="flex gap-2">{stars}</div>;
};

export default StarRating;
