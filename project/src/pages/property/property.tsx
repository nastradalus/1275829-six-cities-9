import Header from '../../components/header/header';
import PropertyHost from '../../components/property-host/property-host';
import PropertyReviews from '../../components/property-reviews/property-reviews';
import PropertyNearPlaces from '../../components/property-near-places/property-near-places';
import Map from '../../components/map/map';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useEffect} from 'react';
import {ParamId} from '../../types/types';
import {useParams} from 'react-router-dom';
import {fetchOfferDataAction} from '../../store/api-actions';
import {loadOffer, loadReviews, loadNearOffers} from '../../store/offer-data/offer-data';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import {getPercentFromRate} from '../../tools';

function Property(): JSX.Element {
  const {id: currentOfferId} = useParams<ParamId>();
  const dispatch = useAppDispatch();

  const offer = useAppSelector(({OFFER}) => OFFER.currentOffer);
  const nearOffers = useAppSelector(({OFFER}) => OFFER.nearOffers);

  const percent = (offer) ? getPercentFromRate(offer.rating) : '';

  useEffect(() => {
    if (currentOfferId) {
      dispatch(fetchOfferDataAction(+currentOfferId));

      return () => {
        dispatch(loadOffer(null));
        dispatch(loadNearOffers([]));
        dispatch(loadReviews([]));
      };
    }
  }, [currentOfferId]);

  return offer
    ? (
      <div className="page">
        <Header/>

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
                    {offer.title}
                  </h1>
                  <button className={`property__bookmark-button button ${offer?.isFavorite ? 'property__bookmark-button--active' : ''}`} type="button">
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
                  <span className="property__rating-value rating__value">{offer.rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {offer.type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {offer.bedrooms} Bedrooms
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
                      offer.goods.map((include, number) => (
                        <li className="property__inside-item" key={number.toString()}>
                          {include}
                        </li>
                      ))
                    }
                  </ul>
                </div>
                {
                  offer.host
                    ? <PropertyHost host={offer.host} offer={offer}/>
                    : null
                }
                <PropertyReviews/>
              </div>
            </div>
            {
              nearOffers.length
                ?
                <section className="property__map map">
                  <Map offers={nearOffers}/>
                </section>
                : null
            }
          </section>
          {
            nearOffers.length
              ?
              <div className="container">
                <PropertyNearPlaces offers={nearOffers}/>
              </div>
              : null
          }
        </main>
      </div>
    )
    : <LoadingScreen/>;
}

export default Property;
