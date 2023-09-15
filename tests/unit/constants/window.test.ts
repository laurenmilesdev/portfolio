import WindowConstants from '../../../src/constants/window';

describe('WindowConstants', () => {
  it('returns WINDOW_HEADER_HEIGHT constant', () => {
    const response = WindowConstants.WINDOW_HEADER_HEIGHT;

    expect(response).toEqual(32);
  });

  it('returns IE_WINDOW_HEADER_HEIGHT constant', () => {
    const response = WindowConstants.IE_WINDOW_HEADER_HEIGHT;

    expect(response).toEqual(128);
  });
});
