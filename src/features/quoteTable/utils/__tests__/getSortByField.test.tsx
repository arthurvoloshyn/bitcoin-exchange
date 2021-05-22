import { getMockQuoteTicker, getSortByField } from '..';

describe('Test get sort by field fn', () => {
  const oneTicker = getMockQuoteTicker();
  const twoTicker = getMockQuoteTicker();

  it('Default use', () => {
    const testTickers = [oneTicker, twoTicker];

    expect(testTickers.sort(getSortByField('last', 'up'))).toEqual([
      oneTicker,
      twoTicker,
    ]);

    expect(testTickers.sort(getSortByField('last', 'down'))).toEqual([
      twoTicker,
      oneTicker,
    ]);

    expect(testTickers.sort(getSortByField('ask', 'up'))).toEqual([
      oneTicker,
      twoTicker,
    ]);

    expect(testTickers.sort(getSortByField('ask', 'down'))).toEqual([
      twoTicker,
      oneTicker,
    ]);
  });
});
