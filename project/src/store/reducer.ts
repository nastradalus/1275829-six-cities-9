import {createReducer} from '@reduxjs/toolkit';
import {cities as allCities} from '../mock/cities';
import {offers} from '../mock/offers';
import {City} from '../types/city';
import {Offer} from '../types/offer';
import {changeCity, changePoint, changeSort, sortPopular, sortPriceAsc, sortPriceDesc, sortTopRated} from './action';
import {DEFAULT_POINT_ID, SortType} from '../const';

const DEFAULT_CITY_INDEX = 0;
const DEFAULT_CITY = allCities[DEFAULT_CITY_INDEX];
const DEFAULT_SORT = SortType.Popular;

const getOffersByCity = (currentCity: City): Offer[] => offers.filter(({city}) => city === currentCity.title);

const initialState = {
  cities: allCities,
  city: DEFAULT_CITY,
  cityOffers: getOffersByCity(DEFAULT_CITY),
  sortedOffers: getOffersByCity(DEFAULT_CITY),
  sortType: DEFAULT_SORT,
  point: DEFAULT_POINT_ID,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
      state.cityOffers = getOffersByCity(action.payload);
      state.sortType = DEFAULT_SORT;
      state.sortedOffers = state.cityOffers;
    })
    .addCase(changeSort, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(changePoint, (state, action) => {
      state.point = action.payload;
    })
    .addCase(sortPopular, (state) => {
      state.sortedOffers = state.cityOffers;
    })
    .addCase(sortPriceAsc, (state) => {
      state.sortedOffers.sort(
        (nextOffer, currentOffer) => nextOffer.price - currentOffer.price,
      );
    })
    .addCase(sortPriceDesc, (state) => {
      state.sortedOffers.sort(
        (nextOffer, currentOffer) => currentOffer.price - nextOffer.price,
      );
    })
    .addCase(sortTopRated, (state) => {
      state.sortedOffers.sort(
        (nextOffer, currentOffer) => currentOffer.rate - nextOffer.rate,
      );
    });
});
