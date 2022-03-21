import Header from '../../components/header/header';
import PropertyHost from '../../components/property-host/property-host';
import PropertyReviews from '../../components/property-reviews/property-reviews';
import PropertyNearPlaces from '../../components/property-near-places/property-near-places';
import {CONVERT_RATE_TO_PERCENT, DEFAULT_POINT_ID} from '../../const';
import Map from '../../components/map/map';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useState} from 'react';
import {ActiveOfferType, ParamId} from '../../types/types';
import {useParams} from 'react-router-dom';
import {fetchOfferDataAction} from '../../store/api-actions';
import {loadNearOffers, loadOffer, loadReviews} from '../../store/action';
import LoadingScreen from '../../components/loading-screen/loading-screen';

function Property(): JSX.Element | null {
  const [point, setPoint] = useState<ActiveOfferType>(DEFAULT_POINT_ID);
  const {id: currentOfferId} = useParams<ParamId>();
  const dispatch = useAppDispatch();

  const offer = useAppSelector((state) => state.currentOffer);
  const nearOffers = useAppSelector((state) => state.nearOffers);
  const reviews = useAppSelector((state) => state.reviews);
  const isOfferDataLoading = useAppSelector((state) => state.isOfferDataLoading);

  const percent = (offer) ? `${offer.rating * CONVERT_RATE_TO_PERCENT}%` : '';

  if (currentOfferId && (!offer || (offer && offer.id !== +currentOfferId)) && !isOfferDataLoading) {
    dispatch(loadOffer(null));
    dispatch(loadNearOffers([]));
    dispatch(loadReviews([]));
    dispatch(fetchOfferDataAction(+currentOfferId));
  }

  if (isOfferDataLoading) {
    return (<LoadingScreen/>);
  }

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
                <PropertyReviews reviews={reviews}/>
              </div>
            </div>
            {
              nearOffers.length
                ?
                <section className="property__map map">
                  <Map offers={nearOffers} selectedPlace={point}/>
                </section>
                : null
            }
          </section>
          {
            nearOffers.length
              ?
              <div className="container">
                <PropertyNearPlaces offers={nearOffers} offerChange={setPoint}/>
              </div>
              : null
          }
        </main>
      </div>
    )
    : null;
}

export default Property;
