import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { initialData } from "@/initdata";

import myStorage from "./MyLocalStorage";

const MOVIE_STORAGE = "movie-storage";

export interface Movie {
  id: number;
  title: string;
  comment: string;
  score: number;
}

export type NewMovie = Omit<Movie, "id">;

interface MoviesState {
  movies: Movie[];
  add: (movie: NewMovie) => void;
  syncStore: () => void;
}

function nextMovieId(movies: Movie[]) {
  const ids = movies.map(({ id }) => id);
  return Math.max(...ids) + 1;
}

export const useMovieStore = create(
  persist<MoviesState>(
    (set) => ({
      movies: [...initialData],
      add: (movie: NewMovie) => {
        set(({ movies }: { movies: any }) => ({
          movies: [
            ...movies,
            {
              id: nextMovieId(movies),
              ...movie,
            },
          ],
        }));
      },
      syncStore: () => {
        if (!myStorage.sync()) return;

        const stringifyData = myStorage.getItem(MOVIE_STORAGE);

        if (stringifyData) {
          const { movies } = JSON.parse(stringifyData).state;
          set(() => ({ movies: [...movies] }));
        }
      },
    }),
    {
      name: MOVIE_STORAGE,
      storage: createJSONStorage(() => myStorage),
    }
  )
);
