import Header from '../../components/header/header';
import LocationList from '../../components/location-list/location-list';
import SortForm from '../../components/sort-form/sort-form';
import PlaceCard from '../../components/place-card/place-card';
import {AuthorizationStatus} from '../../const';

type MainProps = {
  authorizationStatus: AuthorizationStatus,
  cardNumber: number
};

function Main({authorizationStatus, cardNumber}: MainProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header authorizationStatus={authorizationStatus}/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationList/>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{cardNumber} places to stay in Amsterdam</b>
              <SortForm/>
              <div className="cities__places-list places__list tabs__content">
                <PlaceCard/>
                <PlaceCard/>
                <PlaceCard/>
                <PlaceCard/>
                <PlaceCard/>
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
