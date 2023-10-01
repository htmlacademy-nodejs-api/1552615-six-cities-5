import dayjs from 'dayjs';
import { OfferGenerator } from './offer-generator.interface.js';
import { City, MockServerData } from '../../types/index.js';
import { generateRandomValue, getRandomItem} from '../../helpers/index.js';

const MIN_PRICE = 100;
const MAX_PRICE = 100000;

const MIN_GUESTS_COUNT = 1;
const MAX_GUESTS_COUNT = 10;

const MIN_RATING_VALUE = 1;
const MAX_RATING_VALUE = 5;

const MIN_ROOMS_COUNT = 1;
const MAX_ROOMS_COUNT = 8;

const FIRST_WEEK_DAY = 1;
const LAST_WEEK_DAY = 7;

const MIN_COMMENTS_COUNT = 1;
const MAX_COMMENTS_COUNT = 100;

const LOCATIONS = {
  'Paris': { 'latitude': 48.85661, 'longitude': 2.351499 },
  'Cologne': { 'latitude': 50.938361, 'longitude': 6.959974 },
  'Brussels': { 'latitude': 50.846557, 'longitude': 4.351697 },
  'Amsterdam': { 'latitude': 52.370216, 'longitude': 4.895168 },
  'Hamburg': { 'latitude': 53.550341, 'longitude': 10.000654 },
  'Dusseldorf': { 'latitude': 51.225402, 'longitude': 6.776314 }
};

export class TSVOfferGenerator implements OfferGenerator {
  constructor(private readonly mockData: MockServerData) { }

  public generate(): string {
    const title = getRandomItem<string>(this.mockData.titles);
    const description = getRandomItem<string>(this.mockData.descriptions);
    const city = getRandomItem<string>(this.mockData.cities) as keyof typeof City;
    const preview = getRandomItem<string>(this.mockData.previews);
    const photos = getRandomItem<string[]>(this.mockData.photos).join(';');
    const type = getRandomItem<string>(this.mockData.types);
    const convenience = getRandomItem<string>(this.mockData.convieniences);
    const authorName = getRandomItem<string>(this.mockData.names);
    const email = getRandomItem<string>(this.mockData.emails);
    const password = getRandomItem<string>(this.mockData.passwords);
    const avatar = getRandomItem<string>(this.mockData.avatars);

    const location = `${LOCATIONS[city].latitude};${LOCATIONS[city].longitude}`;

    const publishedDate = dayjs()
      .subtract(generateRandomValue(FIRST_WEEK_DAY, LAST_WEEK_DAY), 'day')
      .toISOString();

    const premium = getRandomItem(['true', 'false']);
    const favorite = getRandomItem(['true', 'false']);
    const proType = getRandomItem(['true', 'false']);

    const rating = generateRandomValue(MIN_RATING_VALUE, MAX_RATING_VALUE, 1).toString();
    const roomsCount = generateRandomValue(MIN_ROOMS_COUNT, MAX_ROOMS_COUNT).toString();
    const guestsCount = generateRandomValue(MIN_GUESTS_COUNT, MAX_GUESTS_COUNT).toString();
    const price = generateRandomValue(MIN_PRICE, MAX_PRICE).toString();
    const commentsCount = generateRandomValue(MIN_COMMENTS_COUNT, MAX_COMMENTS_COUNT).toString();
    return [title, description, publishedDate, city, preview, photos, premium, favorite, rating, type, roomsCount, guestsCount, price, convenience, authorName, email, avatar, password, proType, commentsCount, location].join('\t');
  }

}
