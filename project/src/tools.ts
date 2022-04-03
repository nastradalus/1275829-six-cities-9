import {CONVERT_RATE_TO_PERCENT} from './const';
import {Offer} from './types/types';

export const getPercentFromRate = (rating: number): string => `${rating * CONVERT_RATE_TO_PERCENT}%`;

export const updateOfferFavoriteStatus = (offers: Offer[], id: number, status: boolean): Offer[] => {
  for (const offer of offers) {
    if (offer.id === id) {
      offer.isFavorite = status;
      return offers;
    }
  }

  return offers;
};
