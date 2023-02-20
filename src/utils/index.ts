import { Movie } from "@/stores";

/* A~Z U+0041~U+005A | a~z U+0061~U+007A | ㄱ-ㅎ U+3131~U+314E | 가-힣 U+AC00~U+D7A3
   A-Za-z가-힣 유니코드 값으로 비교 한다 */
export function getSortMovies(movies: Movie[]) {
  const copiedMovies = movies.slice();
  copiedMovies.sort((prev, next) => {
    if (prev.score === next.score) {
      return prev.title < next.title ? -1 : 1;
    }
    return -prev.score + next.score;
  });
  return copiedMovies;
}
