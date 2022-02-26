import Header from '../../components/header/header';
import LocationList from '../../components/location-list/location-list';
import {AuthorizationStatus} from '../../const';
import {Offer} from '../../types/offer';
import OfferAndMap from '../../components/offers-and-map/offers-and-map';

type MainProps = {
  authorizationStatus: AuthorizationStatus,
  offers: Offer[]
};

function Main({authorizationStatus, offers}: MainProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header authorizationStatus={authorizationStatus}/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationList/>
        </div>
        <OfferAndMap offers={offers}/>
      </main>
    </div>
  );
}

export default Main;
