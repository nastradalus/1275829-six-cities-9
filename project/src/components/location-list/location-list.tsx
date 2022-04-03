import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeCity} from '../../store/offers-data/offers-data';
import {NameSpace} from '../../const';
import {memo} from 'react';

function LocationList(): JSX.Element {
  const activeCity = useAppSelector(({[NameSpace.Offers]: offers}) => offers.city);
  const cities = useAppSelector((({[NameSpace.Offers]: offers}) => offers.cities));
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

export default memo(LocationList);
