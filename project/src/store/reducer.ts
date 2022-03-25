import {createReducer} from '@reduxjs/toolkit';
import {cities as allCities} from '../mock/cities';
import {City, PublicProfile, Review} from '../types/types';
import {Offer} from '../types/types';
import {
  addReview,
  changeCity,
  changeSort, loadNearOffers,
  loadOffer,
  loadOffers, loadReviews,
  requireAuthorization,
  setError,
  setUserInfo
} from './action';
import {AuthorizationStatus, SortType} from '../const';

const DEFAULT_CITY_INDEX = 0;
const DEFAULT_CITY = allCities[DEFAULT_CITY_INDEX];
const DEFAULT_SORT = SortType.Popular;

const getOffersByCity = (offers: Offer[], currentCity: City): Offer[] => offers.filter(({city}) => city.name === currentCity.name);

type InitialState = {
  cities: City[],
  city: City,
  offers: Offer[],
  cityOffers: Offer[],
  sortedOffers: Offer[],
  sortType: SortType,
  authorizationStatus: AuthorizationStatus,
  profile: PublicProfile | null,
  isDataLoaded: boolean,
  error: string,
  currentOffer: Offer | null,
  nearOffers: Offer[],
  reviews: Review[],
};

const initialState: InitialState = {
  cities: allCities,
  city: DEFAULT_CITY,
  offers: [],
  cityOffers: [],
  sortedOffers: [],
  sortType: DEFAULT_SORT,
  authorizationStatus: AuthorizationStatus.Unknown,
  profile: null,
  isDataLoaded: false,
  error: '',
  currentOffer: null,
  nearOffers: [],
  reviews: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
      state.cityOffers = getOffersByCity(state.offers, action.payload);
      state.sortType = DEFAULT_SORT;
      state.sortedOffers = state.cityOffers;
    })
    .addCase(changeSort, (state, action) => {
      state.sortType = action.payload;
      switch (action.payload) {
        case SortType.PriceAsc:
          state.sortedOffers.sort(
            (nextOffer, currentOffer) => nextOffer.price - currentOffer.price,
          );
          break;
        case SortType.PriceDesc:
          state.sortedOffers.sort(
            (nextOffer, currentOffer) => currentOffer.price - nextOffer.price,
          );
          break;
        case SortType.TopRated:
          state.sortedOffers.sort(
            (nextOffer, currentOffer) => currentOffer.rating - nextOffer.rating,
          );
          break;
        default:
          state.sortedOffers = state.cityOffers;
          break;
      }
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.cityOffers = getOffersByCity(action.payload, state.city);
      state.sortedOffers = state.cityOffers;
      state.isDataLoaded = true;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserInfo, (state, action) => {
      state.profile = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(loadOffer, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(loadNearOffers, (state, action) => {
      state.nearOffers = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(addReview, (state, action) => {
      state.reviews = action.payload;
    });
});
