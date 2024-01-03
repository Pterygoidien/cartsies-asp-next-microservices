import { create } from "zustand";

type State = {
  pageNumber: number;
  pageSize: number;
  pageCount: number;
  searchTerm: string;
};

type Actions = {
  setParams: (params: Partial<State>) => void;
  reset: () => void;
};

const initialState: State = {
  pageNumber: 1,
  pageSize: 12,
  pageCount: 1,
  searchTerm: "",
};

export const useParamsStore = create<State & Actions>()((set, get) => ({
  ...initialState,
  setParams: (params: Partial<State>): void =>
    set((state: State) => {
      if (
        params.pageNumber &&
        params.pageNumber > 0 &&
        params.pageNumber <= state.pageCount
      ) {
        params.pageNumber = params.pageNumber;
      }

      return {
        ...state,
        ...params,
      };
    }),
  reset: () => set(initialState),
}));
