import {createReducer} from '@reduxjs/toolkit';
import {cities as AllCities} from '../mock/cities';
import {offers} from '../mock/offers';
import {City} from '../types/city';
import {Offer} from '../types/offer';
import {changeCity} from './action';

const DEFAULT_CITY_INDEX = 0;
const DEFAULT_CITY = AllCities[DEFAULT_CITY_INDEX];

const getOffersByCity = (currentCity: City): Offer[] => offers.filter(({city}) => city === currentCity.title);

const initialState = {
  cities: AllCities,
  city: DEFAULT_CITY,
  cityOffers: getOffersByCity(DEFAULT_CITY),
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
      state.cityOffers = getOffersByCity(action.payload);
    });
});
