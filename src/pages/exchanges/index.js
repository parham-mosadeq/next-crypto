import { Container, Grid, GridItem } from '@chakra-ui/react';
import { fetchExchanges } from '../../helpers/api-utils';
import ExchangesList from '@/components/shared/ExchangesList';

import Paginate from '@/components/shared/Paginate';
import usePaginate from '@/helpers/usePaginate';
const ExchangeHomePage = ({ allExchanges }) => {
  // console.log(allExchanges);

  const [currentPage, handleNextPage, handlePrevPage, currentItems] =
    usePaginate(1, 10, allExchanges);
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
      {/* paginate component */}
      <Paginate
        // dispatch={dispatch}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        currentPage={currentPage}
      />
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
