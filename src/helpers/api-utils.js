export const fetchCoins = async () => {
  const data = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
  );

  const allCoins = data.json();

  return allCoins;
};