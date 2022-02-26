import {Offer} from '../types/offer';

export const offers: Offer[] = [
  {
    id: 1,
    name: 'Beautiful & luxurious studio at great location',
    type: 'Apartment',
    city: 'Amsterdam',
    bedNumber: 3,
    maxAdults: 4,
    isPremium: true,
    isFavorite: true,
    rate: 4.8,
    images: [
      `https://picsum.photos/260/200?r=${Math.floor(Math.random() * (1000 + 1))}`,
      `https://picsum.photos/260/200?r=${Math.floor(Math.random() * (1000 + 1))}`,
      `https://picsum.photos/260/200?r=${Math.floor(Math.random() * (1000 + 1))}`,
      `https://picsum.photos/260/200?r=${Math.floor(Math.random() * (1000 + 1))}`,
      `https://picsum.photos/260/200?r=${Math.floor(Math.random() * (1000 + 1))}`,
      `https://picsum.photos/260/200?r=${Math.floor(Math.random() * (1000 + 1))}`,
    ],
    price: 120,
    includes: [
      'Wi-Fi', 'Washing machine', 'Towels', 'Heating',
    ],
    host: {
      name: 'Angelina',
      avatar: `http://placekitten.com/74/74?r=${Math.floor(Math.random() * (1000 + 1))}`,
      rang: 'Pro',
      offerDescription: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    },
    reviews: [
      {
        name: 'Max',
        avatar: `http://placekitten.com/54/54?r=${Math.floor(Math.random() * (1000 + 1))}`,
        rate: 4,
        review: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
        date: 'April 2019',
      },
    ],
  },
  {
    id: 2,
    name: 'Wood and stone place',
    type: 'Private room',
    city: 'Amsterdam',
    bedNumber: 2,
    maxAdults: 2,
    isPremium: false,
    isFavorite: false,
    rate: 5,
    images: [
      `https://picsum.photos/260/200?r=${Math.floor(Math.random() * (1000 + 1))}`,
      `https://picsum.photos/260/200?r=${Math.floor(Math.random() * (1000 + 1))}`,
      `https://picsum.photos/260/200?r=${Math.floor(Math.random() * (1000 + 1))}`,
      `https://picsum.photos/260/200?r=${Math.floor(Math.random() * (1000 + 1))}`,
      `https://picsum.photos/260/200?r=${Math.floor(Math.random() * (1000 + 1))}`,
      `https://picsum.photos/260/200?r=${Math.floor(Math.random() * (1000 + 1))}`,
    ],
    price: 80,
    includes: [
      'Wi-Fi', 'Washing machine', 'Towels', 'Heating',
    ],
    host: {
      name: 'Angelina',
      avatar: `http://placekitten.com/74/74?r=${Math.floor(Math.random() * (1000 + 1))}`,
      rang: 'Pro',
      offerDescription: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    },
    reviews: [
      {
        name: 'Max',
        avatar: `http://placekitten.com/54/54?r=${Math.floor(Math.random() * (1000 + 1))}`,
        rate: 2,
        review: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
        date: 'April 2019',
      },
    ],
  },
  {
    id: 3,
    name: 'White castle',
    type: 'Apartment',
    city: 'Cologne',
    bedNumber: 2,
    maxAdults: 2,
    isPremium: true,
    isFavorite: true,
    rate: 5,
    images: [
      `https://picsum.photos/260/200?r=${Math.floor(Math.random() * (1000 + 1))}`,
      `https://picsum.photos/260/200?r=${Math.floor(Math.random() * (1000 + 1))}`,
      `https://picsum.photos/260/200?r=${Math.floor(Math.random() * (1000 + 1))}`,
      `https://picsum.photos/260/200?r=${Math.floor(Math.random() * (1000 + 1))}`,
      `https://picsum.photos/260/200?r=${Math.floor(Math.random() * (1000 + 1))}`,
      `https://picsum.photos/260/200?r=${Math.floor(Math.random() * (1000 + 1))}`,
    ],
    price: 75,
    includes: [
      'Wi-Fi', 'Washing machine', 'Towels', 'Heating',
    ],
    host: {
      name: 'Angelina',
      avatar: `http://placekitten.com/74/74?r=${Math.floor(Math.random() * (1000 + 1))}`,
      rang: 'Pro',
      offerDescription: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    },
    reviews: [
      {
        name: 'Max',
        avatar: `http://placekitten.com/54/54?r=${Math.floor(Math.random() * (1000 + 1))}`,
        rate: 2,
        review: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
        date: 'April 2019',
      },
    ],
  },
];
