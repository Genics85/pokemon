import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type AvailableThemes = "#E85382" | "#39BADF" | "#E1A725";

type StateType = {
  value: AvailableThemes;
};

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    value: "#E1A725",
  } as StateType,
  reducers: {
    setTheme: (state, action: PayloadAction<AvailableThemes>) => {
      state.value = action.payload;
    },
  },
});

export default themeSlice.reducer;
