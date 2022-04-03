import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus, NameSpace} from '../../const';
import {useAppSelector} from '../../hooks';

type PrivateRouteProps = {
  children: JSX.Element;
}

function AuthRoute({children}: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector(({[NameSpace.User]: user}) => user.authorizationStatus);

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.SignIn}/>
  );
}

export default AuthRoute;
