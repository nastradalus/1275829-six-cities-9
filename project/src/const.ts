export const TIMEOUT_SHOW_ERROR = 500;

export const DEFAULT_POINT_ID = -1;

export const CONVERT_RATE_TO_PERCENT = 20;

export const RATES = new Map([
  ['5', 'perfect'],
  ['4', 'good'],
  ['3', 'not bad'],
  ['2', 'badly'],
  ['1', 'terribly'],
]);

export const MONTHS = new Map([
  [1, 'January'],
  [2, 'February'],
  [3, 'March'],
  [4, 'April'],
  [5, 'May'],
  [6, 'June'],
  [7, 'July'],
  [8, 'August'],
  [9, 'September'],
  [10, 'October'],
  [11, 'November'],
  [12, 'December'],
]);

export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  Favorites = '/favorites',
  Room = '/offer',
  RoomId = ':id',
  NoPage = '/404',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum OfferCardType {
  Cities = 'cities',
  NearPlaces = 'near-places',
}

export enum DateFormat {
  Date = 'Y-m-d',
  StringDate = 'Month Year',
}

export enum SortType {
  Popular = 'Popular',
  PriceAsc = 'Price: low to high',
  PriceDesc = 'Price: high to low',
  TopRated = 'Top rated first',
}

export enum SortState {
  Opened = 'opened',
  Closed = 'closed',
}

export enum Placeholder {
  OfferId = '{hotelId}',
  FavoriteStatus = '{status}',
}

export enum APIRoute {
  Login = '/login',
  Logout = '/logout',
  Offers = '/hotels',
  Offer = '/hotels/{hotelId}',
  NearOffer = '/hotels/{hotelId}/nearby',
  Favorites = '/favorite',
  SetFavoriteStatus = '/favorite/{hotelId}/{status}',
  OfferComments = '/comments/{hotelId}',
  AddOfferComment = '/comments/{hotelId}',
}

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}

export enum NameSpace {
  offer = 'OFFER',
  offers = 'OFFERS',
  user = 'USER',
  error = 'ERROR',
  point = 'POINT',
}
