import * as ContactTypeConstant from '../../../src/constants/contact-type';

describe('content-type constants', () => {
  it('returns email constant', () => {
    const response = ContactTypeConstant.email;

    expect(response).toEqual('Email');
  });

  it('returns gitHub constant', () => {
    const response = ContactTypeConstant.gitHub;

    expect(response).toEqual('GitHub');
  });

  it('returns linkedIn constant', () => {
    const response = ContactTypeConstant.linkedIn;

    expect(response).toEqual('LinkedIn');
  });

  it('returns resume constant', () => {
    const response = ContactTypeConstant.resume;

    expect(response).toEqual('Resume');
  });
});
