import SortForm from '../sort-form/sort-form';
import OfferCard from '../offer-card/offer-card';
import Map from '../map/map';
import {DEFAULT_POINT_ID, OfferCardType} from '../../const';
import {useAppSelector} from '../../hooks';
import {useState} from 'react';
import {ActiveOfferType} from '../../types/types';

function OfferAndMap(): JSX.Element {
  const [point, setPoint] = useState<ActiveOfferType>(DEFAULT_POINT_ID);
  const activeCity = useAppSelector(((state) => state.city));
  const cityOffers = useAppSelector(((state) => state.cityOffers));
  const sortedOffers = useAppSelector(((state) => state.sortedOffers));

  return (
    <div className="cities">
      {
        cityOffers.length
          ?
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{cityOffers.length} places to stay in {activeCity.name}</b>
              <SortForm/>
              <div className="cities__places-list places__list tabs__content">
                {
                  sortedOffers.map((offer) => (
                    <OfferCard
                      key={offer.id}
                      place={offer}
                      offerCardType={OfferCardType.Cities}
                      offerChange={setPoint}
                    />),
                  )
                }
              </div>
            </section>
            <div className="cities__right-section">
              <section data-current={activeCity.name} className="cities__map map">
                <Map offers={cityOffers} selectedPlace={point}/>
              </section>
            </div>
          </div>
          :
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">No places to stay available</b>
                <p className="cities__status-description">
                  We could not find any property available at the moment in {activeCity.name}
                </p>
              </div>
            </section>
            <div className="cities__right-section"/>
          </div>
      }
    </div>
  );
}

export default OfferAndMap;
