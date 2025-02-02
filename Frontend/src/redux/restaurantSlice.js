import { createSlice } from "@reduxjs/toolkit";

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: {
    selectedRestaurant: null, // To store the clicked restaurant
  },
  reducers: {
    setSelectedRestaurant: (state, action) => {
      state.selectedRestaurant = action.payload; // Update the selected restaurant
    },
    clearSelectedRestaurant: (state) => {
      state.selectedRestaurant = null; // Clear the selected restaurant
    },
  },
});

export const { setSelectedRestaurant, clearSelectedRestaurant } =
  restaurantSlice.actions;
export default restaurantSlice.reducer;
