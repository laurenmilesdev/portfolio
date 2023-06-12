import EmailTextFieldTypeConstant from '../../../src/constants/email-text-field-type';

describe('email-text-field-type constants', () => {
  it('returns to constant', () => {
    const response = EmailTextFieldTypeConstant.TO;

    expect(response).toEqual('To');
  });

  it('returns from constant', () => {
    const response = EmailTextFieldTypeConstant.FROM;

    expect(response).toEqual('From');
  });

  it('returns subject constant', () => {
    const response = EmailTextFieldTypeConstant.SUBJECT;

    expect(response).toEqual('Subject');
  });

  it('returns body constant', () => {
    const response = EmailTextFieldTypeConstant.BODY;

    expect(response).toEqual('Body');
  });
});
