export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  Favorites = '/favorites',
  Room = '/offer',
  RoomId = ':id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
}

export const CONVERT_RATE_TO_PERCENT = 20;

export const RATES = new Map([
  ['5', 'perfect'],
  ['4', 'good'],
  ['3', 'not bad'],
  ['2', 'badly'],
  ['1', 'terribly'],
]);
