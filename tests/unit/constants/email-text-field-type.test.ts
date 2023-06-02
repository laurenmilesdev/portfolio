import * as EmailTextFieldTypeConstant from '../../../src/constants/email-text-field-type';

describe('email-text-field-type constants', () => {
  it('returns to constant', () => {
    const response = EmailTextFieldTypeConstant.to;

    expect(response).toEqual('to');
  });

  it('returns from constant', () => {
    const response = EmailTextFieldTypeConstant.from;

    expect(response).toEqual('from');
  });

  it('returns subject constant', () => {
    const response = EmailTextFieldTypeConstant.subject;

    expect(response).toEqual('subject');
  });

  it('returns body constant', () => {
    const response = EmailTextFieldTypeConstant.body;

    expect(response).toEqual('body');
  });
});
