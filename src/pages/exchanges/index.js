import { Box, Button, Container, Grid, GridItem, Text } from '@chakra-ui/react';
import { fetchExchanges } from '../../helpers/api-utils';
import ExchangesList from '@/components/shared/ExchangesList';
import { useSelector, useDispatch } from 'react-redux';
import {
  handleNextPage,
  handlePrevPage,
} from '@/components/redux/faves/faveSlice';
const ExchangeHomePage = ({ allExchanges }) => {
  const dispatch = useDispatch();
  // console.log(allExchanges);

  let currentPage = useSelector((state) => state.faveState.currentPage);
  const dataPerPage = useSelector((state) => state.faveState.dataPerPage);

  const indexOfLastEx = currentPage * dataPerPage;
  const indexOfFirstEx = indexOfLastEx - dataPerPage;

  const currentItems = allExchanges.slice(indexOfFirstEx, indexOfLastEx);

  return (
    <Container maxW='container.lg'>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3,1fr)',
        }}
        gap={3}
        mt={10}
      >
        {allExchanges ? (
          currentItems.map((exchange) => {
            return (
              <GridItem key={exchange.id} rounded='4xl'>
                <ExchangesList exchange={exchange} />
              </GridItem>
            );
          })
        ) : (
          <p>loading...</p>
        )}
      </Grid>
      <Box display='flex' justifyContent='center' alignItems='center'>
        <Button onClick={() => dispatch(handlePrevPage())}>prev</Button>
        <Text as='p' textAlign='center' mx={2}>
          {currentPage <= 9 ? currentPage : (currentPage = 10)}
        </Text>
        <Button onClick={() => dispatch(handleNextPage())}>next</Button>
      </Box>
    </Container>
  );
};

export default ExchangeHomePage;

export async function getServerSideProps(context) {
  const allExchanges = await fetchExchanges();
  return {
    props: {
      allExchanges,
    },
  };
}
