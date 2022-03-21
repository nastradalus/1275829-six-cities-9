import {useAppDispatch, useAppSelector} from '../../hooks';
import {SortState, SortType} from '../../const';
import {changeSort} from '../../store/action';
import {useState} from 'react';

function SortForm(): JSX.Element {
  const [sortState, setSortState] = useState(SortState.Closed);
  const sortType = useAppSelector((state) => state.sortType);
  const dispatch = useAppDispatch();

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => {
          setSortState(SortState.Opened);
        }}
      >
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${sortState === SortState.Opened ? 'places__options--opened' : ''}`}>
        {
          Object.values(SortType).map(
            (sort) => {
              let sortClassName = 'places__option';

              if (sort === sortType) {
                sortClassName += ' places__option--active';
              }

              return (
                <li
                  key={sort}
                  className={sortClassName}
                  tabIndex={0}
                  onClick={() => {
                    dispatch(changeSort(sort));
                    setSortState(SortState.Closed);
                  }}
                >
                  {sort}
                </li>
              );
            },
          )
        }
      </ul>
    </form>
  );
}

export default SortForm;
