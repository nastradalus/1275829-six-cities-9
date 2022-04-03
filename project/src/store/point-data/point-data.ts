import {createSlice} from '@reduxjs/toolkit';
import {DEFAULT_POINT_ID, NameSpace} from '../../const';

const initialState: {
  activePoint: number,
} = {
  activePoint: DEFAULT_POINT_ID,
};

export const pointData = createSlice({
  name: NameSpace.Point,
  initialState,
  reducers: {
    setActivePoint: (state, action) => {
      state.activePoint = action.payload;
    },
  },
});

export const {setActivePoint} = pointData.actions;
