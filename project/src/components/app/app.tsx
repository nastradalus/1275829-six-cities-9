import {Route, BrowserRouter, Routes, Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Property from '../../pages/property/property';
import NoPage from '../../pages/no-page/no-page';
import NoAuthRoute from '../no-auth-route/no-auth-route';
import AuthRoute from '../auth-route/auth-route';

type AppProps = {
  authorizationStatus: AuthorizationStatus,
  cardNumber: number
};

function App({cardNumber, authorizationStatus}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={
          <Main cardNumber={cardNumber} authorizationStatus={authorizationStatus}/>
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
            <Favorites cardNumber={2}/>
          </AuthRoute>
        }
        />
        <Route path={AppRoute.Room}>
          <Route index element={<Navigate to={AppRoute.Main}/>}/>
          <Route path={AppRoute.RoomId} element={<Property authorizationStatus={authorizationStatus}/>}/>
        </Route>
        <Route path="*" element={NoPage()}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
