import {createAsyncThunk} from '@reduxjs/toolkit';
import {api} from './index';
import {store} from './index';
import {APIRoute, AppRoute, AuthorizationStatus, Placeholder, TIMEOUT_SHOW_ERROR} from '../const';
import {errorHandle} from '../services/error-handle';
import {
  AddReviewActionProps,
  AuthData,
  Offer,
  Profile,
  PublicProfile,
  Review
} from '../types/types';
import {
  addReview,
  loadNearOffers,
  loadOffer,
  loadOffers, loadReviews,
  redirectToRoute,
  requireAuthorization,
  setError, setOfferDataLoading,
  setUserInfo
} from './action';
import {dropToken, saveToken} from '../services/token';

const cutProfile = (
  {id, isPro, email, name, avatarUrl}: Profile,
): PublicProfile =>
  Object.assign({id, isPro, email, name, avatarUrl});

const getOfferApiUrl = (url: string, offerId: number) => url.replace(Placeholder.OfferId, String(offerId));

export const fetchOffersAction = createAsyncThunk(
  'api/fetchOffers',
  async () => {
    try {
      const {data} = await api.get<Offer[]>(APIRoute.Offers);
      store.dispatch(loadOffers(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchOfferDataAction = createAsyncThunk(
  'api/fetchOfferData',
  async (offerId: number) => {
    try {
      store.dispatch(setOfferDataLoading(true));

      const {data: offerData} = await api.get<Offer>(getOfferApiUrl(APIRoute.Offer, offerId));
      const {data: reviews} = await api.get<Review[]>(getOfferApiUrl(APIRoute.OfferComments, offerId));
      const {data: nearOffers} = await api.get<Offer[]>(getOfferApiUrl(APIRoute.NearOffer, offerId));

      store.dispatch(loadOffer(offerData));
      store.dispatch(loadReviews(reviews));
      store.dispatch(loadNearOffers(nearOffers));

      store.dispatch(setOfferDataLoading(false));
    } catch (error) {
      store.dispatch(setOfferDataLoading(false));
      store.dispatch(redirectToRoute(AppRoute.NoPage));
      errorHandle(error);
    }
  },
);

export const addReviewAction = createAsyncThunk(
  'api/addReview',
  async (
    {
      offerId,
      comment,
      rating,
    }: AddReviewActionProps,
  ) => {
    try {
      const {data} = await api.post<Review[]>(
        getOfferApiUrl(APIRoute.AddOfferComment, offerId),
        {comment, rating},
      );
      store.dispatch(addReview(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const clearErrorAction = createAsyncThunk(
  'clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError('')),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const checkAuthAction = createAsyncThunk(
  'api/checkAuth',
  async () => {
    try {
      const {data} = await api.get<Profile>(APIRoute.Login);
      store.dispatch(setUserInfo(cutProfile(data)));
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch (error) {
      errorHandle(error);
      store.dispatch(setUserInfo(null));
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk(
  'api/login',
  async ({login: email, password}: AuthData) => {
    try {
      const {data} = await api.post<Profile>(APIRoute.Login, {email, password});
      saveToken(data.token);
      store.dispatch(setUserInfo(cutProfile(data)));
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      store.dispatch(redirectToRoute(AppRoute.Main));
    } catch (error) {
      errorHandle(error);
      store.dispatch(setUserInfo(null));
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk(
  'api/logout',
  async () => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      store.dispatch(setUserInfo(null));
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    } catch (error) {
      errorHandle(error);
    }
  },
);
