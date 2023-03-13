import { Container, Grid, GridItem } from '@chakra-ui/react';
import { fetchExchanges } from '../../helpers/api-utils';
import ExchangesList from '@/components/shared/ExchangesList';
const ExchangeHomePage = ({ allExchanges }) => {
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
          allExchanges.map((exchange) => {
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
    </Container>
  );
};

export default ExchangeHomePage;

export async function getServerSideProps() {
  const allExchanges = await fetchExchanges();
  return {
    props: {
      allExchanges,
    },
  };
}
