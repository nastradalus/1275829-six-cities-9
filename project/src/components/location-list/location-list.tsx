import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeCity} from '../../store/action';

function LocationList(): JSX.Element {
  const {city: activeCity, cities} = useAppSelector(((state) => state));
  const dispatch = useAppDispatch();

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {
          cities.map((city) => (
            <li className="locations__item" key={city.title}>
              <a
                className={`locations__item-link tabs__item ${(city.title === activeCity.title) ? 'tabs__item--active' : ''}`}
                onClick={() => {
                  dispatch(changeCity(city));
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
