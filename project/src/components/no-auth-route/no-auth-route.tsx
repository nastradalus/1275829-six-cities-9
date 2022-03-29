import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {useAppSelector} from '../../hooks';

type PrivateRouteProps = {
  children: JSX.Element;
}

function NoAuthRoute({children}: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector(({USER}) => USER.authorizationStatus);

  return (
    authorizationStatus === AuthorizationStatus.NoAuth
      ? children
      : <Navigate to={AppRoute.Main}/>
  );
}

export default NoAuthRoute;
