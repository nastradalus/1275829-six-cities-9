import Header from '../../components/header/header';
import LocationList from '../../components/location-list/location-list';
import {AuthorizationStatus} from '../../const';
import OfferAndMap from '../../components/offers-and-map/offers-and-map';
import {useAppSelector} from '../../hooks';

type MainProps = {
  authorizationStatus: AuthorizationStatus,
};

function Main({authorizationStatus}: MainProps): JSX.Element {
  const {cityOffers} = useAppSelector((state) => state);

  return (
    <div className="page page--gray page--main">
      <Header authorizationStatus={authorizationStatus}/>

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
