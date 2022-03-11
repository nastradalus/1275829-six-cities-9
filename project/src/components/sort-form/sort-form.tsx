import {useAppDispatch, useAppSelector} from '../../hooks';
import {SortType} from '../../const';
import {changeSort, sortPopular, sortPriceAsc, sortPriceDesc, sortTopRated} from '../../store/action';

function SortForm(): JSX.Element {
  const {sortType} = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
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
                    switch (sort) {
                      case SortType.PriceAsc:
                        dispatch(sortPriceAsc());
                        break;
                      case SortType.PriceDesc:
                        dispatch(sortPriceDesc());
                        break;
                      case SortType.TopRated:
                        dispatch(sortTopRated());
                        break;
                      default:
                        dispatch(sortPopular());
                        break;
                    }
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
