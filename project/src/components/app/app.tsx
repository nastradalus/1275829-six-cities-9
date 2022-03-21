import {Route, Routes, Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import NoPage from '../../pages/no-page/no-page';
import NoAuthRoute from '../no-auth-route/no-auth-route';
import AuthRoute from '../auth-route/auth-route';
import {useAppSelector} from '../../hooks';
import LoadingScreen from '../loading-screen/loading-screen';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import Property from '../../pages/property/property';

const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

function App(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isDataLoaded = useAppSelector((state) => state.isDataLoaded);

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen/>
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Main} element={
          <Main/>
        }
        />
        <Route path={AppRoute.SignIn} element={
          <NoAuthRoute>
            <Login/>
          </NoAuthRoute>
        }
        />
        <Route path={AppRoute.Favorites} element={
          <AuthRoute>
            <Favorites/>
          </AuthRoute>
        }
        />
        <Route path={AppRoute.Room}>
          <Route index element={<Navigate to={AppRoute.NoPage}/>}/>
          <Route
            path={AppRoute.RoomId}
            element={<Property/>}
          />
        </Route>
        <Route path="*" element={<NoPage/>}/>
      </Routes>
    </HistoryRouter>
  );
}

export default App;
