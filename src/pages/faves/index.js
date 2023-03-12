import CoinsList from '@/components/shared/CoinsList';
import HeadMaker from '@/components/shared/HeadMaker';
import { Container, Grid, GridItem } from '@chakra-ui/react';

const FavesHomePage = () => {
  let faves;

  // * Checking to see if our page (document) is loaded, then accessing the localStorage.
  // * Why? because we can't access localStorage on server.
  if (typeof window !== 'undefined') {
    faves = JSON.parse(localStorage.getItem('faves'));
  }
  console.log(faves, 123);

  return (
    <Container>
      <HeadMaker
        homeProp='Coin Market'
        location='Faves'
        metaName='favorite'
        metaDesc='This page shows users favorite coin/exchanges'
      />
      Faves
      <Grid>
        {faves.map((coin) => {
          return (
            <GridItem>
              <CoinsList coin={coin} />
            </GridItem>
          );
        })}
      </Grid>
    </Container>
  );
};

export default FavesHomePage;
