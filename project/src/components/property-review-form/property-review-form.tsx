import {useState, Fragment, FormEvent, ChangeEvent} from 'react';
import {DEFAULT_POINT_ID, RATES} from '../../const';
import {addReviewAction} from '../../store/api-actions';
import {useAppDispatch} from '../../hooks';
import {useParams} from 'react-router-dom';
import {FormReview} from '../../types/types';

const initState: FormReview = {
  rating: 0,
  comment: '',
};

function PropertyReviewForm(): JSX.Element {
  const [formData, setFormData] = useState(initState);
  const dispatch = useAppDispatch();
  const params = useParams();

  const fieldChangeHandle = (evt: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (formData.rating !== 0 && formData.comment !== '') {
      dispatch(addReviewAction(
        {
          ...formData,
          offerId: params.id ? +params.id : DEFAULT_POINT_ID,
        },
      ));
      setFormData(initState);
    }
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
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
                    onChange={fieldChangeHandle}
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
        onChange={fieldChangeHandle}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!formData.rating || !formData.comment}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default PropertyReviewForm;
