export class User {
  id!: string;
  firstName!: string;
  lastName?: string;
  email!: string;
  userName!: string;
  avatar?: string;
  role!: string;
  createdAt!: Date;
  rating?: number;

  constructor(user: TUser) {
    const { lastName = '', createdAt } = user;
    Object.assign(this, {
      ...user,
      lastName,
      createdAt: new Date(createdAt),
      rating: 0,
    });
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`.trim();
  }
}

export type TUser = Omit<User, 'fullName'>;
