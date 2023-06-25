import ContactTypeConstants from '../../../src/constants/contact-type';

describe('content-type constants', () => {
  it('returns GITHUB constant', () => {
    const response = ContactTypeConstants.GITHUB;

    expect(response).toEqual('GitHub');
  });

  it('returns LINKEDIN constant', () => {
    const response = ContactTypeConstants.LINKEDIN;

    expect(response).toEqual('LinkedIn');
  });

  it('returns RESUME constant', () => {
    const response = ContactTypeConstants.RESUME;

    expect(response).toEqual('Resume');
  });
});
