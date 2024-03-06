import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type AvailableThemes = "#E85382" | "#39BADF" | "yellow";

type StateType = {
  value: AvailableThemes;
};

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    value: "#39BADF",
  } as StateType,
  reducers: {
    setTheme: (state, action: PayloadAction<AvailableThemes>) => {
      state.value = action.payload;
    },
  },
});

export default themeSlice.reducer;
