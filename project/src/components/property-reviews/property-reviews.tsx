import PropertyReviewForm from '../property-review-form/property-review-form';
import {AuthorizationStatus, CONVERT_RATE_TO_PERCENT, DateFormat, MONTHS} from '../../const';
import {Review} from '../../types/offer';

type PropertyReviewsProps = {
  authorizationStatus: AuthorizationStatus,
  reviews: Review[]
};

const getZeroRoundMonth = (target: number): string => (target < 10) ? `0${target}` : `${target}`;

const getFormatDate = (date: number, format: string): string => {
  const dateFull = new Date(date);
  const dateMonth = dateFull.getMonth() + 1;
  const dateYear = dateFull.getMonth();

  switch (format) {
    case DateFormat.Date:
      return `${dateFull.getFullYear()}
      -${getZeroRoundMonth(dateMonth)}
      -${getZeroRoundMonth(dateYear)}`;
    case DateFormat.StringDate:
      return `${MONTHS.get(dateMonth)} ${dateYear}`;
    default:
      return '';
  }
};

function PropertyReviews({authorizationStatus, reviews}: PropertyReviewsProps): JSX.Element {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {
          reviews.map(({name, avatar, rate, review, date}) => (
            <li className="reviews__item" key={name}>
              <div className="reviews__user user">
                <div className="reviews__avatar-wrapper user__avatar-wrapper">
                  <img className="reviews__avatar user__avatar" src={avatar} width="54" height="54" alt="Reviews avatar"/>
                </div>
                <span className="reviews__user-name">{name}</span>
              </div>
              <div className="reviews__info">
                <div className="reviews__rating rating">
                  <div className="reviews__stars rating__stars">
                    <span style={{width: `${rate * CONVERT_RATE_TO_PERCENT}%`}}/>
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <p className="reviews__text">
                  {review}
                </p>
                <time className="reviews__time" dateTime={getFormatDate(date, DateFormat.Date)}>
                  {getFormatDate(date, DateFormat.StringDate)}
                </time>
              </div>
            </li>
          ))
        }
      </ul>
      {
        authorizationStatus === AuthorizationStatus.Auth
          ?
          <PropertyReviewForm/>
          : null
      }
    </section>
  );
}

export default PropertyReviews;
