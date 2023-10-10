import { City } from './city.enum.js';
import { HousingType } from './housing-type.enum.js';
import { ConvenienceType } from './convenience-type.enum.js';
import { User } from './user.type.js';

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
  convenience: ConvenienceType;
  user: User;
  location: {
    latitude: number,
    longitude: number
  };
}
