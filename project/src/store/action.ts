import {createAction} from '@reduxjs/toolkit';
import {City, Offer, PublicProfile, Review} from '../types/types';
import {AppRoute, AuthorizationStatus, SortType} from '../const';

export const changeCity = createAction<City>('changeCity');
export const changeSort = createAction<SortType>('changeSort');
export const loadOffers = createAction<Offer[]>('loadOffers');
export const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization');
export const setUserInfo = createAction<PublicProfile | null>('setUserInfo');
export const setError = createAction<string>('setError');
export const redirectToRoute = createAction<AppRoute>('redirectToRoute');
export const loadOffer = createAction<Offer | null>('loadOffer');
export const loadNearOffers = createAction<Offer[]>('loadNearsOffer');
export const loadReviews = createAction<Review[]>('loadReviews');
export const addReview = createAction<Review[]>('addReview');
export const setOfferDataLoading = createAction<boolean>('setOfferDataLoading');
