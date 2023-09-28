import { User } from './user.type.js';

export type Comment = {
  commentText: string;
  date: Date;
  rating: number;
  author: User;
}
