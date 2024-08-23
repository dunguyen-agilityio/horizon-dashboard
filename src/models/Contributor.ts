import { User } from './User';

export class Contributor extends User {
  template!: string;
  rating!: number;

  constructor(contributor: Contributor) {
    const { template, rating, ...rest } = contributor;
    super(rest);
    Object.assign(this, {
      template,
      rating,
    });
  }
}
