import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {Offer, Review} from '../../types/types';

const initialState: {
  currentOffer: Offer | null,
  nearOffers: Offer[],
  reviews: Review[],
} = {
  currentOffer: null,
  nearOffers: [],
  reviews: [],
};

export const offerData = createSlice({
  name: NameSpace.offer,
  initialState,
  reducers: {
    loadOffer: (state, action) => {
      state.currentOffer = action.payload;
    },
    loadNearOffers: (state, action) => {
      state.nearOffers = action.payload;
    },
    loadReviews: (state, action) => {
      state.reviews = action.payload;
    },
    addReview: (state, action) => {
      state.reviews = action.payload;
    },
  },
});

export const {loadOffer, loadNearOffers, loadReviews, addReview} = offerData.actions;
