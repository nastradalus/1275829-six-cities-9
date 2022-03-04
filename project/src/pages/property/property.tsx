import Header from '../../components/header/header';
import PropertyHost from '../../components/property-host/property-host';
import PropertyReviews from '../../components/property-reviews/property-reviews';
import PropertyNearPlaces from '../../components/property-near-places/property-near-places';
import {AppRoute, AuthorizationStatus, CONVERT_RATE_TO_PERCENT} from '../../const';
import {Navigate, useParams} from 'react-router-dom';
import {ActiveOfferType, Offer} from '../../types/offer';
import Map from '../../components/map/map';
import {City} from '../../types/city';
import {cities} from '../../mock/cities';
import {offersNeighbourhood} from '../../mock/offers-neighbourhood';
import {useState} from 'react';

type PropertyProps = {
  authorizationStatus: AuthorizationStatus
  offers: Offer[]
};

const getOffer = (offers: Offer[], id: number): Offer => {
  for (const offer of offers) {
    if (offer.id === id) {
      return offer;
    }
  }

  throw new Error('Can\'t find offer.');
};

const getCityByName = (name: string): City =>  {
  for (const city of cities) {
    if (city.title === name) {
      return city;
    }
  }

  throw new Error('Can\'t define city.');
};

function Property({authorizationStatus, offers}: PropertyProps): JSX.Element {
  const params = useParams();
  const [activePlace, setActivePlace] = useState<ActiveOfferType>(null);
  const offer = typeof params.id !== 'undefined' ? getOffer(offers, +params?.id) : null;

  const bookmarkButtonClass = `property__bookmark-button button ${offer?.isFavorite ? 'property__bookmark-button--active' : ''}`;
  const percent = (offer) ? `${offer.rate * CONVERT_RATE_TO_PERCENT}%` : '';

  return offer
    ? (
      <div className="page">
        <Header authorizationStatus={authorizationStatus}/>

        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {
                  offer.images.map((image, index) =>
                    (
                      <div key={index.toString()} className="property__image-wrapper">
                        <img className="property__image" src={image} alt="Place image"/>
                      </div>
                    ),
                  )
                }
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {
                  offer.isPremium
                    ?
                    <div className="property__mark">
                      <span>Premium</span>
                    </div>
                    : null
                }
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {offer.name}
                  </h1>
                  <button className={bookmarkButtonClass} type="button">
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"/>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: percent}}/>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{offer.rate}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {offer.type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {offer.bedNumber} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {offer.maxAdults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{offer.price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {
                      offer.includes.map((include, number) => (
                        <li className="property__inside-item" key={number.toString()}>
                          {include}
                        </li>
                      ))
                    }
                  </ul>
                </div>
                {
                  offer.host
                    ? <PropertyHost host={offer.host}/>
                    : null
                }
                <PropertyReviews authorizationStatus={authorizationStatus} reviews={offer.reviews ?? []}/>
              </div>
            </div>
            <section className="property__map map">
              <Map city={getCityByName(offer.city)} places={offersNeighbourhood} selectedPlace={activePlace}/>
            </section>
          </section>
          <div className="container">
            <PropertyNearPlaces offers={offersNeighbourhood} onPlaceHover={setActivePlace}/>
          </div>
        </main>
      </div>
    )
    : <Navigate to={AppRoute.Main} />;
}

export default Property;
