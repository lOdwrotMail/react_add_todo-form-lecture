import { User } from './User';

export interface Todo {
  id: number;
  name: string;
  userId: number;
  user?: User;
}
