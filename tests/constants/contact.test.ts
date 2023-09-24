import ContactConstants from '../../src/constants/contact';

describe('ContactConstants', () => {
  it('returns GITHUB constant', () => {
    const response = ContactConstants.GITHUB;

    expect(response).toEqual('GitHub');
  });

  it('returns LINKEDIN constant', () => {
    const response = ContactConstants.LINKEDIN;

    expect(response).toEqual('LinkedIn');
  });

  it('returns RESUME constant', () => {
    const response = ContactConstants.RESUME;

    expect(response).toEqual('Resume');
  });
});
