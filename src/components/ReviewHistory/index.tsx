import { useMemo } from "react";

import { useMovieStore } from "@/stores";
import { getSortMovies } from "@/utils";

import ReviewCard from "../ReviewCard";

export default function ReviewHistory() {
  const movies = useMovieStore((state) => state.movies);
  const sortedMovies = useMemo(() => getSortMovies(movies), [movies]);

  return (
    <section className="flex flex-col gap-4 bg-[#f5f5f5] p-4">
      <h2 className="text-lg font-bold text-[#194e84]">리뷰 내역</h2>
      <div className="flex flex-col gap-4">
        {sortedMovies.map((movie, idx) => (
          <ReviewCard key={idx} {...movie} />
        ))}
      </div>
    </section>
  );
}
