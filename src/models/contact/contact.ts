export default class Contact {
  name: string;

  description: string;

  value: string;

  url?: string;

  constructor(name: string, description: string, value: string, url?: string) {
    this.name = name;
    this.description = description;
    this.value = value;
    this.url = url;
  }
}
