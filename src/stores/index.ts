import { create } from "zustand";

import { initialData } from "@/test";

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
}

function nextMovieId(movies: Movie[]) {
  const ids = movies.map(({ id }) => id);
  return Math.max(...ids) + 1;
}

export const useMovieStore = create<MoviesState>((set) => ({
  movies: [...initialData],
  add: (movie: NewMovie) => {
    set(({ movies }) => ({
      movies: [
        ...movies,
        {
          id: nextMovieId(movies),
          ...movie,
        },
      ],
    }));
  },
}));
