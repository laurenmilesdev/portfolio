import TextField from '../../../../src/types/component-helpers/text-field';

describe('TextField', () => {
  const type = 'text';
  const value = 'value';
  const label = 'label';
  const placeholder = 'placeholder';

  it('returns TextField type object and isBody is true when id === "body"', () => {
    const id = 'body';
    const response = new TextField(id, type, value, label, placeholder);
    const expectedResponse: TextField = {
      id,
      type,
      value,
      label,
      placeholder,
      isBody: true,
    };

    expect(response).toEqual(expectedResponse);
  });

  it('returns TextField type object and isBody is false when id !== "body"', () => {
    const id = 'id';
    const response = new TextField(id, type, value, label, placeholder);
    const expectedResponse: TextField = {
      id,
      type,
      value,
      label,
      placeholder,
      isBody: false,
    };

    expect(response).toEqual(expectedResponse);
  });
});
