#!/usr/bin/env node
const interview = require('./src/interview.js');
ticker = 'USDT';
fiat = 'KES';
payTypes = 'MPesaKenya';
const buy = {
  ticker: ticker,
  fiat: fiat,
  operation: 'BUY',
  payTypes: payTypes,
};
const sell = {
  ticker: ticker,
  fiat: fiat,
  operation: 'SELL',
  payTypes: payTypes,
};
(async () => {
  let buyd = await interview(buy);
  let selld = await interview(sell);
  buyprice = buyd['Minimum price'];
  sellprice = selld['Maximum price'];
  profit = selld['Maximum price'] - buyd['Minimum price'];
  buypricemedian = buyd['Median price'];
  sellpricemedian = selld['Median price'];
  profitmedian = selld['Median price'] - buyd['Median price'];
  console.log({
    ticker,
    fiat,
    payTypes,
    buyprice: buyprice,
    sellprice,
    profit,
    buypricemedian,
    sellpricemedian,
    profitmedian,
  });
  process.exit(0);
})();
