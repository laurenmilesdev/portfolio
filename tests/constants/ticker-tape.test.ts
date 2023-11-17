import TickerTapeConstants from '../../src/constants/ticker-tape';

describe('TickerTapeConstants', () => {
  it('returns OPEN_TO_WORK constant', () => {
    const response = TickerTapeConstants.OPEN_TO_WORK;

    expect(response).toEqual([
      'OPEN TO WORK',
      'OPEN TO WORK',
      'OPEN TO WORK',
      'OPEN TO WORK',
      'OPEN TO WORK',
      'OPEN TO WORK',
      'OPEN TO WORK',
    ]);
  });
});
