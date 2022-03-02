import {cities} from '../../mock/cities';
import {City} from '../../types/city';

type LocationListProps = {
  activeCity: City,
  setActiveCity: (title: City) => void
};

function LocationList({activeCity, setActiveCity}: LocationListProps): JSX.Element {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {
          cities.map((city) => (
            <li className="locations__item" key={city.title}>
              <a
                className={`locations__item-link tabs__item ${(city.title === activeCity.title) ? 'tabs__item--active' : ''}`}
                onClick={() => {
                  setActiveCity(city);
                }}
              >
                <span>{city.title}</span>
              </a>
            </li>
          ))
        }
      </ul>
    </section>
  );
}

export default LocationList;
