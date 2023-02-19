import { useForm } from "react-hook-form";
import { NewMovie, useMovieStore } from "@/stores";
import ErrorMessage from "../ErrorMessage";

export default function ReviewNew() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewMovie>({
    defaultValues: {
      title: "",
      comment: "",
      score: 5,
    },
  });

  const addMovie = useMovieStore((state) => state.add);

  const handleAddMovie = (data: NewMovie) => {
    addMovie(data);
    reset();
  };

  return (
    <section className="flex flex-col gap-4 bg-[#f5f5f5] p-4">
      <h2 className="text-lg font-bold text-[#194e84]">신규 리뷰 등록</h2>
      <div className="flex flex-col">
        <label className="font-semibold" htmlFor="title">
          영화 제목
        </label>
        <input
          className="h-[40px] rounded-[5px] p-3 border border-solid border-[#ddd]"
          type="text"
          placeholder="제목을 입력해 주세요"
          {...register("title", {
            required: "제목은 필수 입니다.",
            setValueAs: (value) => value.trim(),
          })}
        />
        {errors.title && <ErrorMessage message={errors.title.message} />}
      </div>
      <div className="flex flex-col">
        <label className="font-semibold" htmlFor="comment">
          한줄평
        </label>
        <input
          className="h-[40px] rounded-[5px] p-3 border border-solid border-[#ddd]"
          type="text"
          placeholder="내용을 입력해 주세요"
          {...register("comment", {
            required: "내용은 필수 입니다.",
            setValueAs: (value) => value.trim(),
          })}
        />
        {errors.comment && <ErrorMessage message={errors.comment.message} />}
      </div>
      <div className="flex flex-col">
        <label className="font-semibold" htmlFor="start">
          별점
        </label>
        <select
          className="h-[40px] rounded-[5px] p-2 border border-solid border-[#ddd]"
          {...register("score", {
            setValueAs: (value) => parseInt(value, 10),
          })}
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
          onClick={handleSubmit(handleAddMovie)}
        >
          등록
        </button>
      </div>
    </section>
  );
}
