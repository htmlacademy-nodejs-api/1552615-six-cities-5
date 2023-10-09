import { Schema, Document, model } from 'mongoose';
import { Offer } from '../../types/index.js';

export interface OfferDocument extends Offer, Document {}

const offerSchema = new Schema({
  title: String,
  description: String,
  publishedDate: Date,
  city: City,
  preview: String,
  photos: String[],
  isPremium: Boolean,
  isFavorite: Boolean,
  rating: Number,
  type: HousingType,
  roomsCount: Number,
  guestsCount: Number,
  price: Number,
  convenience: ConvenienceType,
  author: User,
  commentsCount: Number,
  location: {
    latitude: Number,
    longitude: Number
  },
})


