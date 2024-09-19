export class Image {
  hash!: string;
  url!: string;

  constructor(image: Image) {
    Object.assign(this, image);
  }

  generateURL() {
    this.url;
  }
}

export type TImage = Omit<Image, 'generateURL'>;
