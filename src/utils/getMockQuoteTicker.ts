import { IQuoteTicker, QuoteTickerFields } from '../types/features';

let id = 0;

const getMockQuoteTicker = (): IQuoteTicker => {
  const currentId: number = ++id;

  const getRandom = (): string => `${currentId * 10 + Math.random()}`;

  const quoteTicker = {
    symbol: new Array(4).fill(currentId).join(''),
  } as IQuoteTicker;

  const quoteTickerFields: Exclude<QuoteTickerFields, 'symbol'>[] = [
    'bid',
    'ask',
    'high',
    'low',
    'last',
  ];

  quoteTickerFields.forEach((quoteTickerField: QuoteTickerFields) => {
    quoteTicker[quoteTickerField] = getRandom();
  });

  return quoteTicker;
};

export default getMockQuoteTicker;
