import { Role } from '@/types/user';
import { TImage } from './Image';

export class User {
  id!: string;
  firstName!: string;
  lastName?: string;
  email!: string;
  username!: string;
  avatar?: TImage;
  role!: Role;
  createdAt!: Date;
  rating!: number;

  constructor(user: TUser) {
    const { lastName = '', rating = 0, createdAt } = user;
    Object.assign(this, {
      ...user,
      lastName,
      createdAt: new Date(createdAt),
      rating,
    });
  }

  get fullName() {
    return `${this.firstName} ${this.lastName ?? ''}`.trim();
  }
}

export type TUser = Omit<User, 'fullName'>;
