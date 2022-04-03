import Header from '../../components/header/header';
import FavoriteList from '../../components/favorite-list/favorite-list';
import Footer from '../../components/footer/footer';
import {Offer, OffersByCity} from '../../types/types';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useEffect} from 'react';
import {fetchFavoriteOffersAction} from '../../store/api-actions';
import {loadFavoriteOffers} from '../../store/offers-data/offers-data';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import {NameSpace} from '../../const';

const sortOffersByCity = (offers: Offer[]): OffersByCity => {
  const offersByCity: OffersByCity = {};

  offers.forEach((offer) => {
    if (typeof offersByCity[offer.city.name] === 'undefined') {
      offersByCity[offer.city.name] = [];
    }

    offersByCity[offer.city.name].push(offer);
  });

  return offersByCity;
};

function Favorites(): JSX.Element {
  const dispatch = useAppDispatch();
  const offers = useAppSelector(({[NameSpace.Offers]: offersState}) => offersState.favoriteOffers);
  const favoriteOffers = sortOffersByCity(offers);

  useEffect(() => {
    dispatch(fetchFavoriteOffersAction());

    return () => {
      dispatch(loadFavoriteOffers([]));
    };
  }, []);

  return offers ?
    (
      <div className="page">
        <Header/>

        {
          Object.keys(favoriteOffers).length
            ?
            <main className="page__main page__main--favorites">
              <div className="page__favorites-container container">
                <section className="favorites">
                  <h1 className="favorites__title">Saved listing</h1>
                  <FavoriteList offersByCity={favoriteOffers}/>
                </section>
              </div>
            </main>
            :
            <main className="page__main page__main--favorites page__main--favorites-empty">
              <div className="page__favorites-container container">
                <section className="favorites favorites--empty">
                  <h1 className="visually-hidden">Favorites (empty)</h1>
                  <div className="favorites__status-wrapper">
                    <b className="favorites__status">Nothing yet saved.</b>
                    <p className="favorites__status-description">
                      Save properties to narrow down search or plan your future trips.
                    </p>
                  </div>
                </section>
              </div>
            </main>
        }
        <Footer/>
      </div>
    )
    : (<LoadingScreen/>);
}

export default Favorites;
