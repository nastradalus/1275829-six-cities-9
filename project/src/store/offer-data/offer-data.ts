import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {Offer, Review} from '../../types/types';
import {updateOfferFavoriteStatus} from '../../tools';

const initialState: {
  currentOffer: Offer | null,
  nearOffers: Offer[],
  reviews: Review[],
  isFormDisabled: boolean,
} = {
  currentOffer: null,
  nearOffers: [],
  reviews: [],
  isFormDisabled: false,
};

export const offerData = createSlice({
  name: NameSpace.Offer,
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
    disableForm: (state) => {
      state.isFormDisabled = true;
    },
    enableForm: (state) => {
      state.isFormDisabled = false;
    },
    updateCurrentOfferFavoriteStatus: (state, action) => {
      if (state.currentOffer !== null) {
        state.currentOffer.isFavorite = action.payload.status;
      }
    },
    updateNearOffersFavoriteStatus: (state, action) => {
      state.nearOffers = updateOfferFavoriteStatus(state.nearOffers, action.payload.id, action.payload.status);
    },
  },
});

export const {loadOffer, loadNearOffers, loadReviews, addReview, updateCurrentOfferFavoriteStatus, updateNearOffersFavoriteStatus, disableForm, enableForm} = offerData.actions;
