import FavesLists from '@/components/shared/FavesLists';
import HeadMaker from '@/components/shared/HeadMaker';
import { Container, Grid, GridItem } from '@chakra-ui/react';

const FavesHomePage = () => {
  // * Global variable faves
  let faves;

  // * Checking to see if our page (document) is loaded, then accessing the localStorage.
  // * Why? because we can't access localStorage on server.
  if (typeof window !== 'undefined') {
    // * Reading data from localStorage.
    faves = JSON.parse(localStorage.getItem('faves'));
  }

  return (
    <Container maxW='container.lg' minH='container.xl'>
      <HeadMaker
        homeProp='Coin Market'
        location='Faves'
        metaName='favorite'
        metaDesc='This page shows users favorite coin/exchanges'
      />
      <Grid>
        {faves ? (
          faves.map((coin) => {
            return (
              <GridItem>
                <FavesLists coin={coin} />
              </GridItem>
            );
          })
        ) : (
          <h2>there is nothing to show</h2>
        )}
      </Grid>
    </Container>
  );
};

export default FavesHomePage;
