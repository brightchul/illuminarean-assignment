import debounce from "lodash/debounce";
import { useMemo, useState } from "react";
import LeftOutlined from "@ant-design/icons/LeftOutlined";

import { useMovieStore } from "@/stores";
import ReviewCard from "../ReviewCard";

export default function ReviewSearch() {
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchWord, setSearchWord] = useState("");

  const movies = useMovieStore((state) => state.movies);
  const searchedMovies = movies.filter((o) => o.title.includes(searchWord));

  const handleSearchWordInput = useMemo(
    () =>
      debounce((e) => {
        setSearchWord(e.target.value);
      }, 100),
    []
  );

  return (
    <section
      className={`flex flex-col gap-4 p-4 ${
        activeSearch
          ? "fixed text-sm top-0 bottom-0 overflow-y-scroll w-full min-h-full bg-white"
          : ""
      }`}
    >
      <h2 className="flex items-center text-lg font-bold text-dark-blue">
        {activeSearch && (
          <button className="flex" onClick={() => setActiveSearch(false)}>
            <LeftOutlined />
          </button>
        )}
        <span>리뷰 검색</span>
      </h2>
      <div className="flex flex-col">
        <input
          className="h-40px rounded-md p-3 border border-solid border-lightgray bg-very-light-gray"
          type="text"
          onFocus={() => setActiveSearch(true)}
          onChange={handleSearchWordInput}
          placeholder="영화 제목을 입력해 주세요."
        />
      </div>
      {activeSearch && (
        <div className="flex flex-col gap-4">
          {searchedMovies.map((movie, idx) => (
            <ReviewCard key={idx} {...movie} />
          ))}
        </div>
      )}
    </section>
  );
}
