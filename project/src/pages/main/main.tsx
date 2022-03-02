import Header from '../../components/header/header';
import LocationList from '../../components/location-list/location-list';
import {AuthorizationStatus} from '../../const';
import {Offer} from '../../types/offer';
import OfferAndMap from '../../components/offers-and-map/offers-and-map';
import {useState} from 'react';
import {cities} from '../../mock/cities';

type MainProps = {
  authorizationStatus: AuthorizationStatus,
  offers: Offer[]
};

function Main({authorizationStatus, offers}: MainProps): JSX.Element {
  const [activeCity, setActiveCity] = useState(cities[3]);
  const cityOffers = offers.filter(({city}) => city === activeCity.title);

  return (
    <div className="page page--gray page--main">
      <Header authorizationStatus={authorizationStatus}/>

      <main className={`page__main page__main--index ${!cityOffers.length ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationList
            activeCity={activeCity}
            setActiveCity={setActiveCity}
          />
        </div>
        <OfferAndMap
          activeCity={activeCity}
          offers={cityOffers}
        />
      </main>
    </div>
  );
}

export default Main;
