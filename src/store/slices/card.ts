import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CardInfo {
  isPrivacy: boolean;
  cardColor: string;
}

export const cardInfoInitialState: CardInfo = {
  isPrivacy: false,
  cardColor: "#ffffff",
};

export const cardInfoSlice = createSlice({
  name: "cardInfo",
  initialState: cardInfoInitialState,
  reducers: {
    togglePrivacy: (state) => {
      state.isPrivacy = !state.isPrivacy;
    },
    setCardColor: (state, action: PayloadAction<string>) => {
      state.cardColor = action.payload;
    },
  },
});

export const { togglePrivacy, setCardColor } = cardInfoSlice.actions;
export default cardInfoSlice.reducer;
