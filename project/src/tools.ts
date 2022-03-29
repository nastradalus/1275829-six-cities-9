import {CONVERT_RATE_TO_PERCENT} from './const';

export const getPercentFromRate = (rating: number): string => `${rating * CONVERT_RATE_TO_PERCENT}%`;
