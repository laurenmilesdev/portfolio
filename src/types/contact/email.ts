export default class Email {
  to: string;

  from: string;

  subject: string;

  body: string;

  constructor(to: string, from: string, subject: string, body: string) {
    this.to = to;
    this.from = from;
    this.subject = subject;
    this.body = body;
  }
}
