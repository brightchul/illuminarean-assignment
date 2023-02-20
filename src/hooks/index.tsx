import { useMovieStore } from "@/stores";
import { useEffect } from "react";

export function useSyncStore() {
  const syncStore = useMovieStore((state) => state.syncStore);

  useEffect(() => {
    syncStore();
  }, [syncStore]);
}
