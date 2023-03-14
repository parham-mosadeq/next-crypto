import HeadMaker from '@/components/shared/HeadMaker';
import CoinsList from '@/components/shared/CoinsList';
import { fetchCoins } from '@/helpers/api-utils';
import { Box, Container, Grid, GridItem, Input } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { homeSearchInput } from '@/components/redux/general/generalSlice';
import usePaginate from '@/helpers/usePaginate';
import Paginate from '@/components/shared/Paginate';
const HomePage = ({ allCoins }) => {
  const dispatch = useDispatch();
  const searchInput = useSelector((state) => state.generalState.homeSearch);
  // console.log(allCoins);

  // * Handling setCoinName
  const handleSearch = (e) => {
    dispatch(homeSearchInput(e.target.value));
  };

  // * Looking for expected coins
  let searchCoin = allCoins.filter((coin) => {
    const filtered = coin.name.toLowerCase().includes(searchInput);
    return filtered;
  });

  const [currentPage, handleNextPage, handlePrevPage, currentItems] =
    usePaginate(1, 10, searchCoin);
  return (
    <Container maxW='container.lg' minH='container.xl'>
      {/* page title  */}
      <HeadMaker
        homeProp='Coin Market'
        location='Home'
        metaName='Home page'
        metaDesc='home page of our application/coin-market. here you can brows all coins listed by highest price/liked'
      />

      <Box>
        <Input
          onChange={(e) => handleSearch(e)}
          value={searchInput}
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
            currentItems.map((coin) => {
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
      <Paginate
        // dispatch={dispatch}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        currentPage={currentPage}
      />
    </Container>
  );
};

export async function getStaticProps() {
  // * Receiving data from api
  const allCoins = await fetchCoins();

  return {
    props: {
      allCoins,
    },
    // * Revalidating data
    revalidate: 50000,
  };
}

export default HomePage;
