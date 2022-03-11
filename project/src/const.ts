export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  Favorites = '/favorites',
  Room = '/offer',
  RoomId = ':id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
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
