#!/usr/bin/env node
const interview = require('./src/interview.js');
const buy = {
  ticker: 'USDT',
  fiat: 'KES',
  operation: 'BUY',
  payTypes: 'MPesaKenya',
};
const sell = {
  ticker: 'USDT',
  fiat: 'KES',
  operation: 'SELL',
  payTypes: 'MPesaKenya',
};

(async () => {
  let buyd = await interview(buy);
  let selld = await interview(sell);
  console.log({
    selld,
    buyd,
  });
  console.log(`Buy at: ${buyd['Minimum price']}`);
  console.log(`Sell at: ${selld['Maximum price']}`);
  profit = selld['Maximum price'] - buyd['Minimum price'];
  console.log(`profit margin: ${profit}`);
  process.exit(0);
})();
