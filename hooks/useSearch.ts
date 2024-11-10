import {create} from "zustand";

export type SearchState = "idle" | "loading" | "success" | "error";

interface SearchStore {
    type: SearchState;
    query: string;
    search: (query: string) => void;
    results: any[];
    setSearchSuccess: (results: any[]) => void;
}

export const useSearch = create<SearchStore>((set) => ({
    type: "idle",
    query: "",
    search: (query) => set({type: "loading", query}),
    results: [],
    setSearchSuccess: (results) => set({type: "success", results}),
}));