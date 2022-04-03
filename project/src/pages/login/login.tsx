import Header from '../../components/header/header';
import {AppRoute, LoginFormMessageError} from '../../const';
import {FormEvent, useRef} from 'react';
import {useAppDispatch} from '../../hooks';
import {Link} from 'react-router-dom';
import {loginAction} from '../../store/api-actions';
import {setError} from '../../store/error-process/error-process';
import {clearErrorAction} from '../../store/api-actions';

const validateEmail = (email: string): boolean => !!email.toLowerCase()
  .match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );

const validatePassword = (password: string): boolean => !!password.match(/([a-zA-Z]\d|\d[a-zA-Z])/);

function Login(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();

  const validateForm = (): boolean => {
    if (loginRef.current && !validateEmail(loginRef.current.value)) {
      dispatch(setError(LoginFormMessageError.Email));
      dispatch(clearErrorAction());
      return false;
    }

    if (passwordRef.current && !validatePassword(passwordRef.current.value)) {
      dispatch(setError(LoginFormMessageError.Password));
      dispatch(clearErrorAction());
      return false;
    }

    return true;
  };

  const formSubmitHandle = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current && passwordRef.current && validateForm()) {
      dispatch(loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      }));
    }
  };

  return (
    <div className="page page--gray page--login">
      <Header isLoginPage/>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="#"
              method="post"
              onSubmit={formSubmitHandle}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={loginRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.Main}>
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;
