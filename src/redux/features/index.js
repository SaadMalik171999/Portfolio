import { createSlice } from "@reduxjs/toolkit";
const modetheme = window.localStorage.getItem("mode");
const initialState = {
  mode: modetheme,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      window.localStorage.setItem("mode", state.mode);
    },
  },
});

export const { setMode } = themeSlice.actions;
export default themeSlice.reducer;
