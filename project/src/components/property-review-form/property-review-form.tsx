import {useState, Fragment, FormEvent, ChangeEvent} from 'react';
import {DEFAULT_POINT_ID, NameSpace, RATES} from '../../const';
import {addReviewAction} from '../../store/api-actions';
import {disableForm} from '../../store/offer-data/offer-data';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useParams} from 'react-router-dom';
import {FormReview} from '../../types/types';

const MIN_REVIEW_LENGTH = 50;
const MAX_REVIEW_LENGTH = 300;

const initState: FormReview = {
  rating: 0,
  comment: '',
};

function PropertyReviewForm(): JSX.Element {
  const isFormDisabled = useAppSelector(({[NameSpace.Offer]: offer}) => offer.isFormDisabled);
  const [formData, setFormData] = useState(initState);
  const dispatch = useAppDispatch();
  const params = useParams();

  const handleFieldChange = (evt: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  const isFormButtonDisabled = () => !formData.rating || formData.comment.length < 50 || formData.comment.length > 300 || isFormDisabled;

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    dispatch(disableForm());
    dispatch(addReviewAction(
      {
        ...formData,
        offerId: params.id ? +params.id : DEFAULT_POINT_ID,
      },
    ));
    setFormData(initState);
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          [...RATES.keys()]
            .map((rate, number) =>
              (
                <Fragment key={number.toString()}>
                  <input
                    className="form__rating-input visually-hidden"
                    name="rating"
                    value={rate}
                    id={`${rate}-stars`}
                    type="radio"
                    checked={formData.rating.toString() === rate}
                    onChange={handleFieldChange}
                    disabled={isFormDisabled}
                  />
                  <label htmlFor={`${rate}-stars`} className="reviews__rating-label form__rating-label" title={RATES.get(rate)}>
                    <svg className="form__star-image" width="37" height="33">
                      <use xlinkHref="#icon-star"/>
                    </svg>
                  </label>
                </Fragment>
              ),
            )
        }
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="comment"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formData.comment}
        minLength={MIN_REVIEW_LENGTH}
        maxLength={MAX_REVIEW_LENGTH}
        onChange={handleFieldChange}
        disabled={isFormDisabled}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isFormButtonDisabled()}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default PropertyReviewForm;
