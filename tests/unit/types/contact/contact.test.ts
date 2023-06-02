import Contact from '../../../../src/types/contact/contact';

describe('Contact', () => {
  it('returns Contact type object with url when provided', () => {
    const name = 'name';
    const description = 'description';
    const value = 'value';
    const url = 'url';
    const response = new Contact(name, description, value, url);
    const expectedResponse: Contact = {
      name,
      description,
      value,
      url,
    };

    expect(response).toEqual(expectedResponse);
  });

  it('returns Contact type object with undefined url when not provided', () => {
    const name = 'name';
    const description = 'description';
    const value = 'value';
    const response = new Contact(name, description, value);
    const expectedResponse: Contact = {
      name,
      description,
      value,
      url: undefined,
    };

    expect(response).toEqual(expectedResponse);
  });
});
