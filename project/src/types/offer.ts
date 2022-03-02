export type Host = {
  name: string,
  avatar: string,
  rang: string,
  offerDescription: string,
};

export type Review = {
  name: string,
  avatar: string,
  rate: number,
  review: string,
  date: string,
};

export type ActiveOfferType = number | null;

export type Coords = [number, number];

export type Offer = {
  id: number,
  name: string,
  type: string,
  city: string,
  coords: Coords
  bedNumber: number,
  maxAdults: number,
  isPremium: boolean,
  isFavorite: boolean,
  rate: number,
  images: string[],
  price: number,
  includes: string[],
  host: Host,
  reviews: Review[],
};

export type OffersByCity = {
  [property: string]: Offer[]
};
