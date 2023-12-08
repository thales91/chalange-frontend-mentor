import { create } from "zustand";

interface FilterState {
  region: string;
  search: string;
  setSearch: (search: string) => void;
  setRegion: (region: string) => void;
}

const useFilter = create<FilterState>((set) => ({
  region: "",
  search: "",
  setSearch: (search) => set((state) => ({ search: search })),
  setRegion: (region) => set((state) => ({ region: region })),
}));

export default useFilter;
