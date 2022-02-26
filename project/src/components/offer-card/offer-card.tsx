import {AppRoute, CONVERT_RATE_TO_PERCENT} from '../../const';
import {Offer} from '../../types/offer';
import {Link} from 'react-router-dom';

type OfferCardProps = {
  place: Offer,
  onPlaceChange: (id: number) => void
};

function OfferCard({place, onPlaceChange}: OfferCardProps): JSX.Element {
  const {id, name, type, isPremium, isFavorite, rate, images, price} = place;
  const image = images ? images[0] : null;
  const percent = `${rate * CONVERT_RATE_TO_PERCENT}%`;
  const bookmarkButtonClass = `place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`;

  return (
    <article className="cities__place-card place-card" onMouseOver={() => onPlaceChange(id)}>
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
          <div className="cities__image-wrapper place-card__image-wrapper">
            {
              image
                ?
                <a href="#">
                  <img className="place-card__image" src={image} width="260" height="200" alt="Place image"/>
                </a>
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
          <Link to={`${AppRoute.Room}/${id}`}>{name}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
