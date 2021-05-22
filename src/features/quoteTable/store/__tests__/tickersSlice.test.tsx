import { IQuoteTicker, ISortParams } from '../../interfaces';
import tickersSlice, { initialTickersState } from '../tickersSlice';
import { getMockQuoteTicker, getMockQuoteTickerSymbol } from '../../utils';

describe('Test tickers slice', () => {
  const { reducer } = tickersSlice;
  let testTicker: IQuoteTicker;
  let tickersCache: Map<string, IQuoteTicker>;

  beforeEach(() => {
    tickersCache = new Map<string, IQuoteTicker>();
    testTicker = getMockQuoteTicker();
  });

  it('Test initial tickers state', () => {
    expect(reducer(undefined, { type: '' })).toEqual(initialTickersState);
  });

  it('Test tickers/set action', () => {
    tickersCache.set(testTicker.symbol, testTicker);

    expect(
      reducer(
        initialTickersState,
        tickersSlice.actions.tickers.set(tickersCache),
      ),
    ).toEqual({
      ...initialTickersState,
      data: [testTicker],
    });
  });

  it('Test tickers/update action', () => {
    const testTicker2 = getMockQuoteTicker();
    const testTicker3 = getMockQuoteTicker();
    const updatedTestTicker2 = { ...testTicker2, last: '1000' };

    tickersCache.set(updatedTestTicker2.symbol, updatedTestTicker2);
    tickersCache.set(testTicker3.symbol, testTicker3);

    expect(
      reducer(
        {
          ...initialTickersState,
          data: [{ ...testTicker }, { ...testTicker2 }],
        },
        tickersSlice.actions.tickers.update(tickersCache),
      ),
    ).toEqual({
      ...initialTickersState,
      previousData: { [testTicker2.symbol]: testTicker2 },
      data: [testTicker, updatedTestTicker2, testTicker3],
    });
  });

  it('Test set symbol data', () => {
    const testSymbolMock = getMockQuoteTickerSymbol();

    expect(
      reducer(
        initialTickersState,
        tickersSlice.actions.symbols.set([testSymbolMock]),
      ),
    ).toEqual({
      ...initialTickersState,
      symbols: {
        [testSymbolMock.id]: testSymbolMock,
      },
    });
  });

  it('Test toggle dark theme', () => {
    expect(
      reducer(initialTickersState, tickersSlice.actions.toggleDarkTheme()),
    ).toEqual({
      ...initialTickersState,
      isDarkTheme: !initialTickersState.isDarkTheme,
    });
  });

  it('Test set sort type', () => {
    const testPayload: ISortParams = {
      type: 'down',
      field: 'ask',
    };

    expect(
      reducer(
        initialTickersState,
        tickersSlice.actions.setSortType(testPayload),
      ),
    ).toEqual({
      ...initialTickersState,
      sortType: testPayload,
    });
  });

  it('Test toggle limit 50 item', () => {
    expect(
      reducer(initialTickersState, tickersSlice.actions.toggleLimit()),
    ).toEqual({
      ...initialTickersState,
      onLimit50: !initialTickersState.onLimit50,
    });
  });
});
