export type PublicProfile = {
  id: number,
  isPro: boolean,
  email: string,
  name: string,
  avatarUrl: string,
};

export type PrivateProfile = {
  token: string,
};

export type Profile = PublicProfile & PrivateProfile;

export type Review = {
  comment: string,
  date: string,
  id: number,
  rating: number,
  user: {
    avatarUrl: string,
    id: number,
    isPro: boolean,
    name: string,
  }
};

export type Offer = {
  id: number,
  title: string,
  type: string,
  city: {
    location: {
      latitude: number
      longitude: number
      zoom: number
    }
    name: string
  },
  location: {
    latitude: number
    longitude: number
    zoom: number
  }
  bedrooms: number,
  maxAdults: number,
  isPremium: boolean,
  isFavorite: boolean,
  rating: number,
  images: string[],
  previewImage: string,
  price: number,
  goods: string[],
  host: Profile,
  reviews: Review[],
  description: string,
};

export type City = {
  name: string,
  location: {
    latitude: number,
    longitude: number,
    zoom: number,
  },
};

export type OffersByCity = {
  [property: string]: Offer[]
};

export type AuthData = {
  login: string;
  password: string;
};

export type ErrorType = unknown;

export type FormReview = {
  rating: number,
  comment: string,
};

export type OfferActionProps = {
  offerId: number,
};

export type AddReviewActionProps =  OfferActionProps & FormReview;

export type ParamId = {id: string};
