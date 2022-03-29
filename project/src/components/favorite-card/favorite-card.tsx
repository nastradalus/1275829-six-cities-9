import {Offer} from '../../types/types';
import {AppRoute, AuthorizationStatus} from '../../const';
import {Link, useNavigate} from 'react-router-dom';
import {getPercentFromRate} from '../../tools';
import {updateFavoriteStatus} from '../../store/offers-data/offers-data';
import {updateFavoriteStatusAction} from '../../store/api-actions';
import {useAppDispatch, useAppSelector} from '../../hooks';

type FavoriteCardProps = {
  offer: Offer
};

function FavoriteCard({offer}: FavoriteCardProps): JSX.Element {
  const {isPremium, type, images, price, rating, title, id: offerId} = offer;
  const percent = getPercentFromRate(rating);
  const authorizationStatus = useAppSelector(({USER}) => USER.authorizationStatus);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const updateFavoriteStatusHandle = (id: number, status: boolean) => {
    dispatch(updateFavoriteStatus({id, status}));
  };

  const bookmarkClickHandler = () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.SignIn);
    }

    dispatch(updateFavoriteStatusAction({
      offerId: offerId,
      favoriteStatus: false,
      updateStatusHandle: updateFavoriteStatusHandle,
    }));
  };

  return (
    <article className="favorites__card place-card">
      {
        isPremium
          ?
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
          : null
      }
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Room}/${offerId}`}>
          <img className="place-card__image" src={images[0]} width="150" height="110" alt="Place image"/>
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className="place-card__bookmark-button place-card__bookmark-button--active button"
            type="button"
            onClick={bookmarkClickHandler}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: percent}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Room}/${offerId}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default FavoriteCard;
