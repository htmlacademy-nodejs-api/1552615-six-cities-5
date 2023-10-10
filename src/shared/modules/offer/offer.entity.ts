import { defaultClasses, getModelForClass, modelOptions, prop, Ref } from '@typegoose/typegoose';
import { City, ConvenienceType, HousingType } from '../../types/index.js';
import { UserEntity } from '../user/index.js';

@modelOptions({
  schemaOptions: {
    collection: 'offers'
  }
})
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class OfferEntity extends defaultClasses.TimeStamps {
  @prop({trim: true, required: true})
  public title!: string;

  @prop({trim: true, required: true})
  public description!: string;

  @prop({required: true})
  public publishedDate!: Date;

  @prop({required: true, enum: City})
  public city!: City;

  @prop({required: true})
  public preview!: string;

  @prop({required: true})
  public photos!: string[];

  @prop({required: true})
  public isPremium!: boolean;

  @prop({required: true})
  public isFavorite!: boolean;

  @prop({required: true})
  public rating!: number;

  @prop({required: true, enum: HousingType})
  public type!: HousingType;

  @prop({required: true})
  public roomsCount!: number;

  @prop({required: true})
  public guestsCount!: number;

  @prop({required: true})
  public price!: number;

  @prop({required: true, enum: ConvenienceType})
  public convenience!: ConvenienceType;

  @prop({ref: UserEntity, required: true})
  public userId!: Ref<UserEntity>;

  @prop({required: true})
  public commentsCount!: number;

  @prop({required: true})
  public location!: {
    latitude: number,
    longitude: number
  };
}

export const OfferModel = getModelForClass(OfferEntity);
