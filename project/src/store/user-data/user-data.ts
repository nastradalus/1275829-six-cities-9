import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, AuthorizationStatus} from '../../const';
import {PublicProfile} from '../../types/types';

const initialState: {
  authorizationStatus: AuthorizationStatus,
  profile: PublicProfile | null
} = {
  authorizationStatus: AuthorizationStatus.Unknown,
  profile: null,
};

export const userData = createSlice({
  name: NameSpace.user,
  initialState,
  reducers: {
    requireAuthorization: (state, action) => {
      state.authorizationStatus = action.payload;
    },
    setUserInfo: (state, action) => {
      state.profile = action.payload;
    },
  },
});

export const {requireAuthorization, setUserInfo} = userData.actions;
