import FavoriteCard from '../favorite-card/favorite-card';
import {OffersByCity} from '../../types/offer';

type FavoriteListProps = {
  offersByCity: OffersByCity
};

function FavoriteList({offersByCity}: FavoriteListProps): JSX.Element {
  const cities = Object.keys(offersByCity);

  return (
    <ul className="favorites__list">
      {
        cities.map((city, cityNumber) =>
          (
            <li className="favorites__locations-items" key={cityNumber.toString()}>
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#">
                    <span>{city}</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places">
                {
                  offersByCity[city].map((offer, offerNumber) => (
                    <FavoriteCard offer={offer} key={offerNumber.toString()}/>
                  ))
                }
              </div>
            </li>
          ),
        )
      }
    </ul>
  );
}

export default FavoriteList;
