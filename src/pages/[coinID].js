import { Container, Grid, GridItem, Text } from '@chakra-ui/react';
import { fetchCoin, fetchCoins, buildPaths } from '@/helpers/api-utils';
const CoinId = ({ coin }) => {
  console.log(coin);
  return (
    <Container maxW='container.lg'>
      <Grid></Grid>
    </Container>
  );
};

export async function getStaticPaths() {
  const data = await fetchCoins();

  if (!data) {
    console.log(123);
    return {
      redirect: {
        destination: '/',
      },
    };
  }

  if (data.length <= 0) {
    console.log(123);
    return {
      redirect: {
        destination: '/',
      },
    };
  }

  // const paths = data.map((coin) => [{ params: { coinID: coin.id } }]);
  // console.log(paths);
  return {
    paths: [
      {
        params: { coinID: 'bitcoin' },
      },
    ],
    // paths,
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
