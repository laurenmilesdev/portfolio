import ContactTypeConstant from '../../../src/constants/contact-type';

describe('content-type constants', () => {
  it('returns email constant', () => {
    const response = ContactTypeConstant.EMAIL;

    expect(response).toEqual('Email');
  });

  it('returns gitHub constant', () => {
    const response = ContactTypeConstant.GITHUB;

    expect(response).toEqual('GitHub');
  });

  it('returns linkedIn constant', () => {
    const response = ContactTypeConstant.LINKEDIN;

    expect(response).toEqual('LinkedIn');
  });

  it('returns resume constant', () => {
    const response = ContactTypeConstant.RESUME;

    expect(response).toEqual('Resume');
  });
});
