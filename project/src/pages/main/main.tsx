import Header from '../../components/header/header';
import LocationList from '../../components/location-list/location-list';
import OfferAndMap from '../../components/offers-and-map/offers-and-map';
import {useAppSelector} from '../../hooks';

function Main(): JSX.Element {
  const cityOffers = useAppSelector((state) => state.cityOffers);

  return (
    <div className="page page--gray page--main">
      <Header/>

      <main className={`page__main page__main--index ${!cityOffers.length ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationList/>
        </div>
        <OfferAndMap/>
      </main>
    </div>
  );
}

export default Main;
