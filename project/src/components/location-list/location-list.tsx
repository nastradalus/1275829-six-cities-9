import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeCity} from '../../store/action';

function LocationList(): JSX.Element {
  const activeCity = useAppSelector(((state) => state.city));
  const cities = useAppSelector(((state) => state.cities));
  const dispatch = useAppDispatch();

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {
          cities.map((city) => (
            <li className="locations__item" key={city.name}>
              <a
                className={`locations__item-link tabs__item ${(city.name === activeCity.name) ? 'tabs__item--active' : ''}`}
                onClick={() => {
                  dispatch(changeCity(city));
                }}
              >
                <span>{city.name}</span>
              </a>
            </li>
          ))
        }
      </ul>
    </section>
  );
}

export default LocationList;
