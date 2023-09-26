import { FileReader } from './file-reader.interface.js';
import { readFileSync } from 'node:fs';
import { Offer, ConvenienceType, HousingType, City } from '../../types/index.js';


export class TSVFileReader implements FileReader {
  private rawData = '';

  constructor(
    private readonly filename: string
  ) { }

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf-8' });
  }

  public toArray(): Offer[] {
    if (!this.rawData) {
      throw new Error('File was not read');
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim().length > 0)
      .map((line) => line.split('\t'))
      .map(([title, description, publishedDate, city, preview, photos, premium, favorite, rating, type, roomsCount, guestsCount, price, convienience, name, email, avatar, password, proType, commentsCount, location]) => ({
        title,
        description,
        publishedDate: new Date(publishedDate),
        city: City[city as 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf'],
        preview,
        photos: photos.split(';'),
        premium: premium === 'true',
        favorite: favorite === 'true',
        rating: Number.parseFloat(rating),
        type: HousingType[type as 'apartment' | 'house' | 'room' | 'hotel'],
        roomsCount: Number.parseInt(roomsCount, 10),
        guestsCount: Number.parseInt(guestsCount, 10),
        price: Number.parseInt(price, 10),
        convienience: ConvenienceType[convienience as 'Breakfast' | 'AirConditioning' | 'LaptopFriendlyWorkspace' | 'BabySeat' | 'Washer' | 'Towels' | 'Fridge'],
        author: {
          name,
          email,
          avatar,
          password,
          proType: proType === 'true',
        },
        commentsCount: Number.parseInt(commentsCount, 10),
        location: {
          latitude: Number.parseFloat(location.split(';')[0]),
          longitude: Number.parseFloat(location.split(';')[1])
        }
      }));
  }
}
