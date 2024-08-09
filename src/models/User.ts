export class User {
  id!: string;
  firstName!: string;
  lastName?: string;
  email!: string;
  userName!: string;
  avatar?: string;

  constructor(user: TUser) {
    const { lastName = '' } = user;
    Object.assign(this, { ...user, lastName });
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`.trim();
  }
}

export type TUser = Omit<User, 'fullName'>;
