import { useState } from "react";

export default function ReviewSearch() {
  const [activeSearch, setActiveSearch] = useState(false);

  return (
    <section
      className={`flex flex-col gap-4 p-4 ${
        activeSearch ? "fixed top-0 w-full h-full bg-white" : ""
      }`}
    >
      <h2 className="text-lg font-bold text-[#194e84]">
        {activeSearch && (
          <button
            className="hover:text-sky-400"
            onClick={() => setActiveSearch(false)}
          >
            ◀
          </button>
        )}
        리뷰 검색
      </h2>
      <div className="flex flex-col">
        <input
          className="h-[40px] rounded-[5px] p-3 border border-solid border-[#ddd] bg-[#f5f5f5]"
          type="text"
          onFocus={() => setActiveSearch(true)}
          placeholder="영화 제목을 입력해 주세요."
        />
      </div>
    </section>
  );
}
