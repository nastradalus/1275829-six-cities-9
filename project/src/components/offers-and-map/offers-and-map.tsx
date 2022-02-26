import SortForm from '../sort-form/sort-form';
import {Offer} from '../../types/offer';
import OfferCard from '../offer-card/offer-card';
import {useState} from 'react';
import {ActiveOfferType} from '../../types/offer';

type OfferAndMapProps = {
  offers: Offer[]
};

function OfferAndMap({offers}: OfferAndMapProps): JSX.Element {
  const [activePlace, setActivePlace] = useState<ActiveOfferType>(null);

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers.length} places to stay in Amsterdam</b>
          <SortForm/>
          <div className="cities__places-list places__list tabs__content">
            {
              offers.map((offer) => <OfferCard key={offer.id} place={offer} onPlaceChange={setActivePlace}/>)
            }
          </div>
        </section>
        <div className="cities__right-section">
          <section data-current-place={activePlace} className="cities__map map"/>
        </div>
      </div>
    </div>
  );
}

export default OfferAndMap;
