export default class Contact {
  name: string;

  description: string;

  value: string;

  url?: string;

  imgSrc?: string;

  imgDescription?: string;

  constructor(
    name: string,
    description: string,
    value: string,
    url?: string,
    imgSrc?: string,
    imgDescription?: string
  ) {
    this.name = name;
    this.description = description;
    this.value = value;
    this.url = url;
    this.imgSrc = imgSrc;
    this.imgDescription = imgDescription;
  }
}
