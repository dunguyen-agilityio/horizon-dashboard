export class User {
  id!: string;
  firstName!: string;
  lastName?: string;
  email!: string;
  userName!: string;
  avatar?: string;
  role!: string;
  postsTotal?: number;
  followers?: number;
  following?: number;

  constructor(user: TUser) {
    const { lastName = '' } = user;
    Object.assign(this, { ...user, lastName });
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`.trim();
  }
}

export type TUser = Omit<User, 'fullName'>;
