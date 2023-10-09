import { Offer, City, HousingType, ConvenienceType } from '../types/index.js';

export function createOffer(offerData: string): Offer {
  const [title, description, publishedDate, city, preview, photos, isPremium, isFavorite, rating, type, roomsCount, guestsCount, price, convenience, name, email, avatarPath, password, isProType, commentsCount, location] = offerData.replace('\n', '').split('\t');

  return {
    title,
    description,
    publishedDate: new Date(publishedDate),
    city: City[city as 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf'],
    preview,
    photos: photos.split(';'),
    isPremium: isPremium === 'true',
    isFavorite: isFavorite === 'true',
    rating: Number.parseFloat(rating),
    type: HousingType[type as 'apartment' | 'house' | 'room' | 'hotel'],
    roomsCount: Number.parseInt(roomsCount, 10),
    guestsCount: Number.parseInt(guestsCount, 10),
    price: Number.parseInt(price, 10),
    convenience: ConvenienceType[convenience as 'Breakfast' | 'AirConditioning' | 'LaptopFriendlyWorkspace' | 'BabySeat' | 'Washer' | 'Towels' | 'Fridge'],
    author: {
      name,
      email,
      avatarPath,
      password,
      isProType: isProType === 'true',
    },
    commentsCount: Number.parseInt(commentsCount, 10),
    location: {
      latitude: Number.parseFloat(location.split(';')[0]),
      longitude: Number.parseFloat(location.split(';')[1])
    }
  };
}
