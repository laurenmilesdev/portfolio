export default class TextField {
  id: string;

  type: string;

  value: string;

  label: string;

  placeholder: string;

  isBody: boolean;

  constructor(id: string, type: string, value: string, label: string, placeholder: string) {
    this.id = id;
    this.type = type;
    this.value = value;
    this.label = label;
    this.placeholder = placeholder;
    this.isBody = this.id === 'body';
  }
}
