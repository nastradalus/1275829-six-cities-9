import {AppRoute, CONVERT_RATE_TO_PERCENT, DEFAULT_POINT_ID, OfferCardType} from '../../const';
import {ActiveOfferType, Offer} from '../../types/types';
import {Link} from 'react-router-dom';

type OfferCardProps = {
  place: Offer,
  offerCardType: string,
  offerChange: (id: ActiveOfferType) => void,
};

function OfferCard({place, offerCardType, offerChange}: OfferCardProps): JSX.Element {
  const {id, title, type, isPremium, isFavorite, rating, images, price} = place;
  const image = images ? images[0] : null;
  const percent = `${rating * CONVERT_RATE_TO_PERCENT}%`;
  const bookmarkButtonClass = `place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`;

  const articleClass =
    offerCardType === OfferCardType.NearPlaces
      ? 'near-places__card'
      : 'cities__place-card';

  const imageWrapperClass =
    offerCardType === OfferCardType.NearPlaces
      ? 'near-places__image-wrapper'
      : 'cities__place-card';

  return (
    <article
      className={`${articleClass} place-card`}
      onMouseEnter={() => offerChange(id)}
      onMouseLeave={() => offerChange(DEFAULT_POINT_ID)}
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
                <Link to={`${AppRoute.Room}/${id}`}>
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
          <button className={bookmarkButtonClass} type="button">
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
          <Link to={`${AppRoute.Room}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
