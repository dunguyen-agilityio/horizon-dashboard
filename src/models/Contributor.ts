export class Contributor {
  id!: string;
  name!: string;
  template!: string;
  rating!: string;
  createdAt!: string | Date;

  constructor(contributor: Contributor) {
    const { createdAt } = contributor;

    Object.assign(this, {
      ...contributor,
      createdAt: createdAt ? new Date(createdAt) : undefined,
    });
  }
}
