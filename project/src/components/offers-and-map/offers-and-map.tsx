import SortForm from '../sort-form/sort-form';
import {Offer} from '../../types/offer';
import OfferCard from '../offer-card/offer-card';
import {useState} from 'react';
import {ActiveOfferType} from '../../types/offer';
import Map from '../map/map';
import {City} from '../../types/city';

type OfferAndMapProps = {
  activeCity: City,
  offers: Offer[]
};

function OfferAndMap({activeCity, offers}: OfferAndMapProps): JSX.Element {
  const [activePlace, setActivePlace] = useState<ActiveOfferType>(null);

  return (
    <div className="cities">
      {
        offers.length
          ?
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {activeCity.title}</b>
              <SortForm/>
              <div className="cities__places-list places__list tabs__content">
                {
                  offers.map((offer) => <OfferCard key={offer.id} place={offer} onPlaceHover={setActivePlace}/>)
                }
              </div>
            </section>
            <div className="cities__right-section">
              <section data-current={activeCity.title} className="cities__map map">
                <Map city={activeCity} places={offers} selectedPlace={activePlace}/>
              </section>
            </div>
          </div>
          :
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">No places to stay available</b>
                <p className="cities__status-description">
                  We could not find any property available at the moment in {activeCity.title}
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
