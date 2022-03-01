import {useState, Fragment} from 'react';
import {RATES} from '../../const';

function PropertyReviewForm(): JSX.Element {
  const initState: {
    rating: string | null,
    review: any,
  } = {
    rating: null,
    review: '',
  };
  const [formData, setFormData] = useState(initState);

  const fieldChangeHandle = (evt: any) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={(evt) => {
        evt.preventDefault();
      }}
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
                    checked={formData.rating === rate}
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
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formData.review}
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
          disabled={!formData.rating || !formData.review}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default PropertyReviewForm;
