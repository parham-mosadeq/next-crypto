const base_url = `https://api.coingecko.com/api/v3`;

export const fetchCoins = async () => {
  const data = await fetch(
    `${base_url}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false`
  );

  const allCoins = await data.json();
  return allCoins;
};

export const fetchExchanges = async () => {
  const data = await fetch(`
  ${base_url}/exchanges/
  `);

  const allExchanges = await data.json();

  return allExchanges;
};

export const fetchExchange = async (exchangeID) => {
  const data = await fetch(`
  ${base_url}/exchanges/${exchangeID}
  `);

  const exchange = await data.json();

  return exchange;
};

export const fetchCoin = async (coinID) => {
  const data = await fetch(`
  ${base_url}/coins/${coinID}
  `);

  const coin = await data.json();

  return coin;
};

export const buildPaths = async () => {
  const coins = await fetchCoins();

  const paths = coins.map((coin) => [{ params: { coinID: coin.id } }]);

  return paths;
};
