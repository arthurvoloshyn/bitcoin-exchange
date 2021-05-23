import { IQuoteTickerSymbol } from '../types/features';

let id = 0;
function getQuoteTickerSymbol(currentId?: string): IQuoteTickerSymbol {
  if (!currentId) {
    currentId = new Array(6).fill(++id).join('');
  }

  return {
    id: currentId,
    baseCurrency: currentId.substr(0, 2),
    feeCurrency: currentId.substr(2),
  };
}

export default getQuoteTickerSymbol;
