import {createAction} from '@reduxjs/toolkit';
import {City} from '../types/city';
import {SortType} from '../const';
import {ActiveOfferType} from '../types/offer';

export const changeCity = createAction<City>('changeCity');
export const changeSort = createAction<SortType>('changeSort');
export const changePoint = createAction<ActiveOfferType>('changePoint');
export const sortPopular = createAction('sortPopular');
export const sortPriceAsc = createAction('sortPriceAsc');
export const sortPriceDesc = createAction('sortPriceDesc');
export const sortTopRated = createAction('sortTopRated');
