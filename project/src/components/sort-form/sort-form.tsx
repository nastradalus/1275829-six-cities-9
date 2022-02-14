import SortList from '../sort-list/sort-list';

const SortItem = {
  Popular: 'Popular',
  PriceAsc: 'Price: low to high',
  PriceDesc: 'Price: high to low',
  TopRated: 'Top rated first',
};

function SortForm(): JSX.Element {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <SortList defaultSort={SortItem.Popular}/>
    </form>
  );
}

export default SortForm;
