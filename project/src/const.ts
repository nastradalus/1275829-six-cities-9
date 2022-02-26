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


export const rates = [
  {
    id: '5-stars',
    value: '5',
    title: 'perfect',
  },
  {
    id: '4-stars',
    value: '4',
    title: 'good',
  },
  {
    id: '3-stars',
    value: '3',
    title: 'not bad',
  },
  {
    id: '2-stars',
    value: '2',
    title: 'badly',
  },
  {
    id: '1-stars',
    value: '1',
    title: 'terribly',
  },
];
