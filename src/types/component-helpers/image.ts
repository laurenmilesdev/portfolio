import { StaticImageData } from 'next/image';

export default class Image {
  src: StaticImageData;

  altText: string;

  constructor(src: StaticImageData, altText: string) {
    this.src = src;
    this.altText = altText;
  }
}
