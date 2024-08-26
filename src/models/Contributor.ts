import { User } from './User';

export class Contributor extends User {
  template: string;

  constructor(contributor: Contributor) {
    const { template, ...rest } = contributor;
    super(rest);

    this.template = template;
  }
}
