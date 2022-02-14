type SortType = string;

const SortItem = {
  Popular: 'Popular',
  PriceAsc: 'Price: low to high',
  PriceDesc: 'Price: high to low',
  TopRated: 'Top rated first',
};

type SortListProps = {
  defaultSort: SortType;
};

function SortList({defaultSort}: SortListProps): JSX.Element {
  return (
    <ul className="places__options places__options--custom places__options--opened">
      {
        Object.values(SortItem).map(
          (sort) => {
            let sortClassName = 'places__option';

            if (sort === defaultSort) {
              sortClassName += ' places__option--active';
            }

            return (
              <li key={sort} className={sortClassName} tabIndex={0}>{sort}</li>
            );
          },
        )
      }
    </ul>
  );
}

export default SortList;
