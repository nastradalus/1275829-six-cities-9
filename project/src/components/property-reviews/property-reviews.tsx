import PropertyReviewForm from '../property-review-form/property-review-form';
import {AuthorizationStatus, DateFormat, MONTHS, NameSpace} from '../../const';
import {useAppSelector} from '../../hooks';
import {getPercentFromRate} from '../../tools';
import {memo} from 'react';
import {Review} from '../../types/types';

const sortReviews = (reviews: Review[]): Review[] => reviews.slice().sort((next, current) => {
  const currentDate = new Date(Date.parse(current.date)).getTime();
  const nextDate = new Date(Date.parse(next.date)).getTime();

  return (currentDate - nextDate);
});

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
  const reviews = useAppSelector(({[NameSpace.Offer]: offer}) => offer.reviews);
  const authorizationStatus = useAppSelector(({[NameSpace.User]: user}) => user.authorizationStatus);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {
          sortReviews(reviews).slice(0, 10).map(({user, rating, comment, date}, index) => (
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

export default memo(PropertyReviews);
