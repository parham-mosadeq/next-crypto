import HeadMaker from '@/components/shared/HeadMaker';
import CoinsList from '@/components/shared/CoinsList';
import { fetchCoins } from '@/helpers/api-utils';
import { Box, Container, Grid, GridItem, Input } from '@chakra-ui/react';
import { useState } from 'react';
const HomePage = ({ allCoins }) => {
  // * Coin name state
  const [coinName, setCoinName] = useState('');
  // * Handling setCoinName
  const handleSearch = (e) => {
    setCoinName(e.target.value);
  };
  // * Looking for expected coins

  let searchCoin = allCoins.filter((coin) =>
    coin.name.toLowerCase().includes(coinName)
  );

  return (
    <Container maxW='container.lg' minH='container.xl'>
      {/* page title  */}
      <HeadMaker homeProp='coin market' location='home' />

      <Box>
        <Input
          onChange={(e) => handleSearch(e)}
          value={coinName}
          mx='auto'
          my={3}
          placeholder='search coins'
          w='36'
          textTransform='capitalize'
        />
      </Box>

      <Box my={10}>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3,1fr)',
          }}
          gap={3}
        >
          {allCoins.length > 0 ? (
            searchCoin.map((coin) => {
              return (
                <GridItem key={coin.id}>
                  <CoinsList coin={coin} />
                </GridItem>
              );
            })
          ) : (
            <p>loading...</p>
          )}
        </Grid>
      </Box>
    </Container>
  );
};

export async function getStaticProps() {
  const allCoins = await fetchCoins();

  return {
    props: {
      allCoins,
    },
    revalidate: 2500,
  };
}

export default HomePage;
