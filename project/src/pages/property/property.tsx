import Header from '../../components/header/header';
import PropertyGallery from '../../components/property-gallery/property-gallery';
import PropertyFeatures from '../../components/property-features/property-features';
import PropertyInside from '../../components/property-inside/property-inside';
import PropertyHost from '../../components/property-host/property-host';
import PropertyReviews from '../../components/property-reviews/property-reviews';
import PropertyNearPlaces from '../../components/property-near-places/property-near-places';

function Property(): JSX.Element {
  return (
    <>
      <div className="page">
        <Header isAuthorized/>

        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <PropertyGallery propertyNumber={6}/>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                <div className="property__mark">
                  <span>Premium</span>
                </div>
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    Beautiful &amp; luxurious studio at great location
                  </h1>
                  <button className="property__bookmark-button button" type="button">
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: '80%'}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">4.8</span>
                </div>
                <PropertyFeatures/>
                <div className="property__price">
                  <b className="property__price-value">&euro;120</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <PropertyInside/>
                </div>
                <PropertyHost/>
                <PropertyReviews/>
              </div>
            </div>
            <section className="property__map map"></section>
          </section>
          <div className="container">
            <PropertyNearPlaces/>
          </div>
        </main>
      </div>
    </>
  );
}

export default Property;
