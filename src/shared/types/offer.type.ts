import { City } from './city.enum.js';
import { HousingType } from './housing-type.enum.js';
import { ConvenienceType } from './convenience-type.enum.js';

export type Offer = {
  title: string;
  description: string;
  publishedDate: Date;
  city: City;
  preview: string;
  photos: string[];
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  type: HousingType;
  roomsCount: number;
  guestsCount: number;
  price: number;
  convenience: ConvenienceType[];
  userId: string;
  commentsCount: number;
  location: {
    latitude: number,
    longitude: number
  };
}
