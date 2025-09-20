interface RatingProps {
  value: number;
  count: number;
}

const Rating: React.FC<RatingProps> = ({  count }) => (
  <div className="flex items-center">
    <span className="text-yellow-400">★★★★☆</span>
    <span className="ml-1 text-gray-600 text-xs">({count})</span>
  </div>
);

export default Rating;
