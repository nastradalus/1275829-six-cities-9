import OfferCard from '../offer-card/offer-card';
import {OfferCardType} from '../../const';
import {ActiveOfferType, Offer} from '../../types/offer';

type PropertyNearPlacesProps = {
  offers: Offer[]
};

function PropertyNearPlaces({offers}: PropertyNearPlacesProps): JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {
          offers.map((offer) => (
            <OfferCard
              key={offer.id}
              place={offer}
              offerCardType={OfferCardType.NearPlaces}
            />
          ))
        }
      </div>
    </section>
  );
}

export default PropertyNearPlaces;
