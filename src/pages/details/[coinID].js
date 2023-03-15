import { Container, Grid, GridItem, Text } from '@chakra-ui/react';
import { fetchCoin, fetchCoins } from '@/helpers/api-utils';
const CoinId = ({ coin }) => {
  console.log(coin);
  return (
    <Container maxW='container.lg'>
      <Grid></Grid>
    </Container>
  );
};

export async function getStaticPaths() {
  const coins = await fetchCoins();
  const paths = coins.map((coin) => [{ params: { coinID: coin.id } }]);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const coinId = context.params.coinID;
  const coin = await fetchCoin(coinId);
  console.log(coin);
  return {
    props: {
      coin,
    },
  };
}

export default CoinId;
