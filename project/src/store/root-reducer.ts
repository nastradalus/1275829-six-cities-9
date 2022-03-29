import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import {offersData} from './offers-data/offers-data';
import {offerData} from './offer-data/offer-data';
import {userData} from './user-data/user-data';
import {errorProcess} from './error-process/error-process';
import {pointData} from './point-data/point-data';

export const rootReducer = combineReducers({
  [NameSpace.offers]: offersData.reducer,
  [NameSpace.offer]: offerData.reducer,
  [NameSpace.user]: userData.reducer,
  [NameSpace.error]: errorProcess.reducer,
  [NameSpace.point]: pointData.reducer,
});
