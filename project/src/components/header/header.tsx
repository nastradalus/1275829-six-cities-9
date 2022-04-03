import {AppRoute, AuthorizationStatus, NameSpace} from '../../const';
import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fetchOffersAction, logoutAction} from '../../store/api-actions';
import {memo} from 'react';

type HeaderProps = {
  isLoginPage?: boolean
};

function Header({isLoginPage = false}: HeaderProps): JSX.Element {
  const {profile, authorizationStatus} = useAppSelector(({[NameSpace.User]: user}) => user);
  const dispatch = useAppDispatch();

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to={AppRoute.Main}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          {
            !isLoginPage
              ?
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                      {
                        authorizationStatus === AuthorizationStatus.Auth
                          ?
                          <>
                            <div
                              className="header__avatar-wrapper user__avatar-wrapper"
                              style={{
                                backgroundImage: `url(${profile?.avatarUrl})`,
                                borderRadius: '100%',
                              }}
                            />
                            <span className="header__user-name user__name">{profile?.email}</span>
                          </>
                          :
                          <>
                            <div className="header__avatar-wrapper user__avatar-wrapper"/>
                            <span className="header__login">Sign in</span>
                          </>
                      }
                    </Link>
                  </li>
                  {
                    (authorizationStatus === AuthorizationStatus.Auth)
                      ?
                      <li className="header__nav-item">
                        <a className="header__nav-link" href="#">
                          <span
                            className="header__signout"
                            onClick={(evt) => {
                              evt.preventDefault();
                              dispatch(logoutAction());
                              dispatch(fetchOffersAction());
                            }}
                          >
                            Sign out
                          </span>
                        </a>
                      </li>
                      : null
                  }
                </ul>
              </nav>
              : null
          }
        </div>
      </div>
    </header>
  );
}

export default memo(Header);
