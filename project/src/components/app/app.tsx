import {Route, BrowserRouter, Routes, Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Property from '../../pages/property/property';
import NoPage from '../../pages/no-page/no-page';
import NoAuthRoute from '../no-auth-route/no-auth-route';
import AuthRoute from '../auth-route/auth-route';
import {Offer} from '../../types/offer';

type AppProps = {
  authorizationStatus: AuthorizationStatus,
  offers: Offer[]
};

function App({authorizationStatus, offers}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={
          <Main authorizationStatus={authorizationStatus} offers={offers}/>
        }
        />
        <Route path={AppRoute.SignIn} element={
          <NoAuthRoute authorizationStatus={authorizationStatus}>
            <Login/>
          </NoAuthRoute>
        }
        />
        <Route path={AppRoute.Favorites} element={
          <AuthRoute authorizationStatus={authorizationStatus}>
            <Favorites offers={offers}/>
          </AuthRoute>
        }
        />
        <Route path={AppRoute.Room}>
          <Route index element={<Navigate to={AppRoute.Main}/>}/>
          <Route path={AppRoute.RoomId} element={<Property authorizationStatus={authorizationStatus} offers={offers}/>}/>
        </Route>
        <Route path="*" element={<NoPage authorizationStatus={authorizationStatus}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
