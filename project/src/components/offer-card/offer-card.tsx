import {AppRoute, AuthorizationStatus, DEFAULT_POINT_ID, NameSpace, OfferCardType} from '../../const';
import {Offer} from '../../types/types';
import {Link, useNavigate} from 'react-router-dom';
import {getPercentFromRate} from '../../tools';
import {setActivePoint} from '../../store/point-data/point-data';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {updateFavoriteStatusAction} from '../../store/api-actions';
import {updateFavoriteStatus} from '../../store/offers-data/offers-data';
import {updateNearOffersFavoriteStatus} from '../../store/offer-data/offer-data';

type OfferCardProps = {
  place: Offer,
  offerCardType: string,
};

function OfferCard({place, offerCardType}: OfferCardProps): JSX.Element {
  const {id: offerId, title, type, isPremium, isFavorite, rating, images, price} = place;
  const authorizationStatus = useAppSelector(({[NameSpace.User]: user}) => user.authorizationStatus);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const image = images ? images[0] : null;
  const percent = getPercentFromRate(rating);
  const bookmarkButtonClass = `place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`;

  const articleClass =
    offerCardType === OfferCardType.NearPlaces
      ? 'near-places__card'
      : 'cities__place-card';

  const imageWrapperClass =
    offerCardType === OfferCardType.NearPlaces
      ? 'near-places__image-wrapper'
      : 'cities__place-card';

  const handleFavoriteStatusUpdate = (id: number, status: boolean) => {
    dispatch(updateFavoriteStatus({id, status}));

    if (offerCardType === OfferCardType.NearPlaces) {
      dispatch(updateNearOffersFavoriteStatus({id, status}));
    }
  };

  const handlerBookmarkClick = () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.SignIn);
    }

    dispatch(updateFavoriteStatusAction({
      offerId: offerId,
      favoriteStatus: !isFavorite,
      onUpdateStatus: handleFavoriteStatusUpdate,
    }));
  };

  const handlerCardMouseEnter = () => {
    if (offerCardType !== OfferCardType.NearPlaces) {
      dispatch(setActivePoint(offerId));
    }
  };

  const handlerCardMouseLeave = () => {
    if (offerCardType !== OfferCardType.NearPlaces) {
      dispatch(setActivePoint(DEFAULT_POINT_ID));
    }
  };

  return (
    <article
      className={`${articleClass} place-card`}
      onMouseEnter={handlerCardMouseEnter}
      onMouseLeave={handlerCardMouseLeave}
    >
      {
        isPremium
          ?
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
          : null
      }
      {
        images
          ?
          <div className={`${imageWrapperClass} place-card__image-wrapper`}>
            {
              image
                ?
                <Link to={`${AppRoute.Room}/${offerId}`}>
                  <img className="place-card__image" src={image} width="260" height="200" alt="Place image"/>
                </Link>
                : null
            }
          </div>
          : null
      }
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={bookmarkButtonClass}
            type="button"
            onClick={handlerBookmarkClick}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
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

export default OfferCard;
