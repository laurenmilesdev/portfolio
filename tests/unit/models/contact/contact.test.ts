import Contact from '../../../../src/models/contact/contact';

describe('Contact', () => {
  it('returns Contact object with optional properties when provided', () => {
    const name = 'name';
    const description = 'description';
    const value = 'value';
    const url = 'url';
    const imgSrc = 'imgSrc';
    const imgDescription = 'image description';
    const response = new Contact(name, description, value, url, imgSrc, imgDescription);
    const expectedResponse: Contact = {
      name,
      description,
      value,
      url,
      imgSrc,
      imgDescription,
    };

    expect(response).toEqual(expectedResponse);
  });

  it('returns Contact type object with undefined optional properties when not provided', () => {
    const name = 'name';
    const description = 'description';
    const value = 'value';
    const response = new Contact(name, description, value);
    const expectedResponse: Contact = {
      name,
      description,
      value,
      url: undefined,
      imgSrc: undefined,
      imgDescription: undefined,
    };

    expect(response).toEqual(expectedResponse);
  });
});
