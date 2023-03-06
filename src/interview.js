const fetchP2PData = require('./utils/fetchP2PData.js');
const median = require('./utils/median.js');
const interview = async (answers = null) => {
  let totalPrices = [];

  const firstPage = await fetchP2PData(
    1,
    answers.fiat,
    answers.operation,
    answers.ticker,
    answers.payTypes ? [answers.payTypes] : []
  );
  if (firstPage && firstPage.success) {
    const totalPages = Math.ceil(firstPage.total / 20);
    const pagesToRun = new Array(totalPages - 1).fill(null);
    const totalElements = await pagesToRun.reduce(async (prev, _, idx) => {
      const accData = await prev;
      const page = idx + 2;
      const pageResult = await fetchP2PData(
        page,
        answers.fiat,
        answers.operation,
        answers.ticker,
        answers.payTypes ? [answers.payTypes] : []
      );
      if (pageResult && pageResult.success) {
        return [...accData, ...pageResult.data];
      }
      return accData;
    }, Promise.resolve(firstPage.data));
    totalElements.map((obj) => {
      totalPrices.push(parseFloat(obj.adv.price));
    });
  }
  const minimun = answers.operation === 'SELL' ? totalPrices.length - 1 : 0;
  const maximun = answers.operation === 'SELL' ? 0 : totalPrices.length - 1;
  results = {
    'Operation Type': `${answers.operation}`,
    'Transaction type': `${answers.ticker} @ ${answers.fiat}`,
    'People offering': totalPrices.length,
    'Minimum price': totalPrices[minimun].toLocaleString(),
    'Median price': median(totalPrices).toLocaleString(),
    'Maximum price': totalPrices[maximun].toLocaleString(),
  };
  return results;
};

module.exports = interview;
