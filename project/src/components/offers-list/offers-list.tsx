import OfferCard from '../offer-card/offer-card';
import {OfferCardType} from '../../const';
import {useAppSelector} from '../../hooks';

function OffersList(): JSX.Element {
  const sortedOffers = useAppSelector((({OFFERS}) => OFFERS.sortedOffers));

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        sortedOffers.map((offer) => (
          <OfferCard
            key={offer.id}
            place={offer}
            offerCardType={OfferCardType.Cities}
          />),
        )
      }
    </div>
  );
}

export default OffersList;
