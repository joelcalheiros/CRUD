import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import iList from "../interfafes/list";

interface InitialState {
  items: iList[];
}

const initialState: InitialState = {
  items: [],
};

export const fetchList = createAsyncThunk("list", async (apiUrl: string) => {
  const response = await fetch(apiUrl);
  return response.json();
});

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addItem: (state) => {
      state.items.unshift({
        id: Math.floor(Math.random() * 10000000),
        name: "New card",
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
          extension: "jpg",
        },
      });
    },
    editItem: (state, action) => {
      const items = current(state.items);
      const { id, value } = action.payload;

      const indexOfId = items.findIndex((item: iList) => item.id === id);
      state.items[indexOfId].name = value;
    },
    deleteItem: (state, action) => {
      const items = current(state.items);
      const indexOfId = items.findIndex(
        (item: iList) => item.id === action.payload
      );
      state.items.splice(indexOfId, 1);
    },
  },
  extraReducers: (builder: any) => {
    builder.addCase(
      fetchList.fulfilled,
      (state: InitialState, { payload }: any) => {
        state.items = [...payload.data.results];
      }
    );
  },
});

export const { deleteItem, editItem, addItem } = listSlice.actions;
export default listSlice.reducer;
