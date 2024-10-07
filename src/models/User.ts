import { TImage } from './Image';

export type Role = { name: string };

export class User {
  id: string;
  firstName: string;
  lastName?: string;
  email: string;
  username: string;
  avatar?: TImage;
  phoneNumber: string;
  role: Role;
  createdAt: Date;
  rating: number;

  constructor({
    lastName = '',
    rating = 0,
    createdAt,
    email,
    firstName,
    id,
    role,
    username,
    avatar,
    phoneNumber,
  }: TUser) {
    this.id = id;
    this.rating = rating;
    this.avatar = avatar;
    this.role = role;
    this.username = username;
    this.email = email;
    this.lastName = lastName;
    this.firstName = firstName;
    this.createdAt = new Date(createdAt);
    this.phoneNumber = phoneNumber;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName ?? ''}`.trim();
  }
}

export type TUser = Omit<User, 'fullName'>;
