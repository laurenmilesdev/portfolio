export default class Contact {
  name: string;

  value?: string;

  url?: string;

  constructor(name: string, value?: string, url?: string) {
    this.name = name;
    this.value = value;
    this.url = url;
  }
}
