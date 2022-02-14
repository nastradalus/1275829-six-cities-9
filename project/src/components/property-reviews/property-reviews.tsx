import PropertyReviewCard from '../property-review-card/property-review-card';
import PropertyReviewForm from '../property-review-form/property-review-form';

function PropertyReviews(): JSX.Element {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
      <ul className="reviews__list">
        <PropertyReviewCard/>
      </ul>
      <PropertyReviewForm/>
    </section>
  );
}

export default PropertyReviews;
