import Email from '../../../../src/types/contact/email';

describe('Email', () => {
  it('returns Email type object', () => {
    const to = 'to@email.com';
    const from = 'from@email.com';
    const subject = 'subject';
    const body = 'body';
    const response = new Email(to, from, subject, body);
    const expectedResponse: Email = {
      to,
      from,
      subject,
      body,
    };

    expect(response).toEqual(expectedResponse);
  });
});
