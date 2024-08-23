export class User {
  id!: string;
  firstName!: string;
  lastName?: string;
  email!: string;
  userName!: string;
  avatar?: string;
  role!: string;
  createdAt!: Date;

  constructor(user: TUser) {
    const { lastName = '', createdAt } = user;
    Object.assign(this, { ...user, lastName, createdAt: new Date(createdAt) });
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`.trim();
  }
}

export type TUser = Omit<User, 'fullName'>;
