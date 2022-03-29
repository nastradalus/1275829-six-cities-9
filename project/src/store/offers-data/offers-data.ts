import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, SortType} from '../../const';
import {City, Offer} from '../../types/types';
import {cities as allCities} from '../../cities';

const DEFAULT_CITY_INDEX = 0;
const DEFAULT_CITY = allCities[DEFAULT_CITY_INDEX];
const DEFAULT_SORT = SortType.Popular;

const getOffersByCity = (offers: Offer[], currentCity: City): Offer[] => offers.filter(({city}) => city.name === currentCity.name);

const initialState: {
  cities: City[],
  city: City,
  offers: Offer[],
  cityOffers: Offer[],
  sortType: SortType,
  sortedOffers: Offer[],
  isDataLoaded: boolean,
} = {
  cities: allCities,
  city: DEFAULT_CITY,
  offers: [],
  cityOffers: [],
  sortType: DEFAULT_SORT,
  sortedOffers: [],
  isDataLoaded: false,
};

export const offersData = createSlice({
  name: NameSpace.offers,
  initialState,
  reducers: {
    changeCity: (state, action) => {
      state.city = action.payload;
      state.cityOffers = getOffersByCity(state.offers, action.payload);
      state.sortType = DEFAULT_SORT;
      state.sortedOffers = state.cityOffers;
    },
    changeSort: (state, action) => {
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
    },
    loadOffers: (state, action) => {
      state.offers = action.payload;
      state.cityOffers = getOffersByCity(action.payload, state.city);
      state.sortedOffers = state.cityOffers;
      state.isDataLoaded = true;
    },
  },
});

export const {changeCity, changeSort, loadOffers} = offersData.actions;
