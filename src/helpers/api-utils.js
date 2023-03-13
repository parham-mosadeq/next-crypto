const base_url = `https://api.coingecko.com/api/v3`;

export const fetchCoins = async () => {
  const data = await fetch(
    `${base_url}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
  );

  const allCoins = await data.json();

  return allCoins;
};

export const fetchExchanges = async () => {
  const data = await fetch(`
  ${base_url}/exchanges
  `);

  const allExchanges = await data.json();

  return allExchanges;
};
