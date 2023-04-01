export enum AppRoute {
  Main = '/',
  SingIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReviev = '/films/:id/review',
  Player = '/player/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
