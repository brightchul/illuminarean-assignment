import StarFilled from "@ant-design/icons/StarFilled";
import { memo } from "react";

interface ReviewCardProps {
  title: string;
  comment: string;
  score: number;
}

function ReviewCard({ title, comment, score }: ReviewCardProps) {
  return (
    <div className="p-5 border border-solid border-lightgray rounded-lg bg-white">
      <div className="font-bold">{title}</div>
      <div>{comment}</div>
      <div>
        {Array(score)
          .fill(0)
          .map((_, idx) => (
            <StarFilled key={idx} className="text-soft-yellow w-15px h-15px" />
          ))}
      </div>
    </div>
  );
}

export default memo(ReviewCard);
