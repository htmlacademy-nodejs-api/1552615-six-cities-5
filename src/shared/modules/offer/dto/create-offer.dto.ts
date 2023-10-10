import { City, HousingType, ConvenienceType } from '../../../types/index.js';

export class CreateOfferDto {
  public title: string;
  public description: string;
  public publishedDate: Date;
  public city: City;
  public preview: string;
  public photos: string[];
  public isPremium: boolean;
  public isFavorite: boolean;
  public rating: number;
  public type: HousingType;
  public roomsCount: number;
  public guestsCount: number;
  public price: number;
  public convenience: ConvenienceType;
  public userId: string;
  public location: {
    latitude: number,
    longitude: number
  };
}
