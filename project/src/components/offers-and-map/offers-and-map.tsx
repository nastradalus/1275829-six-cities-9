import SortForm from '../sort-form/sort-form';
import Map from '../map/map';
import {useAppSelector} from '../../hooks';
import OffersList from '../offers-list/offers-list';

function OfferAndMap(): JSX.Element {
  const activeCity = useAppSelector((({OFFERS}) => OFFERS.city));
  const cityOffers = useAppSelector((({OFFERS}) => OFFERS.cityOffers));

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
              <OffersList/>
            </section>
            <div className="cities__right-section">
              <section data-current={activeCity.name} className="cities__map map">
                <Map offers={cityOffers}/>
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
