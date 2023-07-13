import ThemeConstants from '../../../src/constants/theme';

describe('ThemeConstants', () => {
  it('returns DARK constant', () => {
    const response = ThemeConstants.DARK;

    expect(response).toEqual('dark');
  });

  it('returns LIGHT constant', () => {
    const response = ThemeConstants.LIGHT;

    expect(response).toEqual('light');
  });
});
