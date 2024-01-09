import { createSlice } from "@reduxjs/toolkit";

const centerSlice = createSlice({
  name: "centers",
  initialState: {
    centers: [],
    numberOfCenters: 0,
    isOpenedCenters: false,
    loading: false,
  },
  reducers: {
    setCenters(state, action) {
      state.centers = action.payload;
    },
    setNumberOfCenters(state, action) {
      state.numberOfCenters = action.payload;
    },
    removeCenter(state, action) {
      const centerId = action.payload;
      state.centers = state.centers.filter((center) => center.id !== centerId);
      state.numberOfDashUsers--;
    },
    setIsOpenedCenters(state) {
      state.isOpenedCenters = !state.isOpenedCenters;
    },
    setLoading(state) {
      state.loading = !state.loading;
    },
  },
});

const centersReducer = centerSlice.reducer;
const centersActions = centerSlice.actions;

export { centersReducer, centersActions };
