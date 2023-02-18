export default function ReviewNew() {
  return (
    <section className="flex flex-col gap-4 bg-[#f5f5f5] p-4">
      <h2 className="text-lg font-bold text-[#194e84]">신규 리뷰 등록</h2>
      <div className="flex flex-col">
        <label className="font-semibold" htmlFor="subject">
          영화 제목
        </label>
        <input
          className="h-[40px] rounded-[5px] p-3 border border-solid border-[#ddd]"
          id="subject"
          type="text"
          placeholder="제목을 입력해 주세요"
        />
      </div>
      <div className="flex flex-col">
        <label className="font-semibold" htmlFor="description">
          한줄평
        </label>
        <input
          className="h-[40px] rounded-[5px] p-3 border border-solid border-[#ddd]"
          id="description"
          type="text"
          placeholder="내용을 입력해 주세요"
        />
      </div>
      <div className="flex flex-col">
        <label className="font-semibold" htmlFor="start">
          별점
        </label>
        <select
          name=""
          id="start"
          className="h-[40px] rounded-[5px] p-2 border border-solid border-[#ddd]"
        >
          <option value="5">5점</option>
          <option value="4">4점</option>
          <option value="3">3점</option>
          <option value="2">2점</option>
          <option value="1">1점</option>
        </select>
      </div>
      <div>
        <button
          className="w-full rounded-[10px] bg-[#194e84] text-[#ffffff] text-[15px] p-3"
          type="button"
        >
          등록
        </button>
      </div>
    </section>
  );
}
