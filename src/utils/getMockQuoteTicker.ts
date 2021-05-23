import { IQuoteTicker } from '../../../types/interfaces';

let id = 0;

export default function getMockQuoteTicker(): IQuoteTicker {
  const currentId = ++id;

  return {
    symbol: new Array(4).fill(currentId).join(''),
    bid: String(currentId * 10 + Math.random()),
    ask: String(currentId * 10 + Math.random()),
    high: String(currentId * 10 + Math.random()),
    low: String(currentId * 10 + Math.random()),
    last: String(currentId * 10 + Math.random()),
  };
}
