import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import {offersData} from './offers-data/offers-data';
import {offerData} from './offer-data/offer-data';
import {userData} from './user-data/user-data';
import {errorProcess} from './error-process/error-process';
import {pointData} from './point-data/point-data';

export const rootReducer = combineReducers({
  [NameSpace.Offers]: offersData.reducer,
  [NameSpace.Offer]: offerData.reducer,
  [NameSpace.User]: userData.reducer,
  [NameSpace.Error]: errorProcess.reducer,
  [NameSpace.Point]: pointData.reducer,
});
