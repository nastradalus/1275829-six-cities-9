import PropertyReviewForm from '../property-review-form/property-review-form';
import {AuthorizationStatus, DateFormat, MONTHS} from '../../const';
import {Review} from '../../types/types';
import {useAppSelector} from '../../hooks';
import {getPercentFromRate} from '../../tools';

const getZeroRoundMonth = (target: number): string => (target < 10) ? `0${target}` : `${target}`;

const getFormatDate = (date: string, format: string): string => {
  const dateFull = new Date(Date.parse(date));
  const dateMonth = dateFull.getMonth() + 1;
  const dateYear = dateFull.getDate();

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

function PropertyReviews(): JSX.Element {
  const reviews = useAppSelector(({OFFER}) => OFFER.reviews);
  const authorizationStatus = useAppSelector(({USER}) => USER.authorizationStatus);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {
          reviews.map(({user, rating, comment, date}, index) => (
            <li className="reviews__item" key={index.toString()}>
              <div className="reviews__user user">
                <div className="reviews__avatar-wrapper user__avatar-wrapper">
                  <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
                </div>
                <span className="reviews__user-name">{user.name}</span>
              </div>
              <div className="reviews__info">
                <div className="reviews__rating rating">
                  <div className="reviews__stars rating__stars">
                    <span style={{width: getPercentFromRate(rating)}}/>
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <p className="reviews__text">
                  {comment}
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
