import BackBtn from '@/components/shared/BackBtn';
import FavesLists from '@/components/shared/FavesLists';
import HeadMaker from '@/components/shared/HeadMaker';
import { Container, Grid, GridItem, Text } from '@chakra-ui/react';
import { useEffect } from 'react';

import { useSelector } from 'react-redux';

const FavesHomePage = () => {
  const state = useSelector((state) => state.faveState.faves);

  // * Global variable faves
  let faves;
  // * Checking to see if our page (document) is loaded, then accessing the localStorage.
  // * Why? because we can't access localStorage on server.
  // if (typeof window !== 'undefined') {
  //   // * Reading data from localStorage.
  //   faves = JSON.parse(localStorage.getItem('faves'));
  // }

  console.log(faves, 1234);
  console.log(state);
  
  useEffect(() => {
    faves = JSON.parse(localStorage.getItem('faves'));
  }, [state]);
  console.log(faves, 123467);

  return (
    <Container maxW='container.lg' minH='container.xl'>
      <HeadMaker
        homeProp='Coin Market'
        location='Faves'
        metaName='favorite'
        metaDesc='This page shows users favorite coin/exchanges'
      />

      <BackBtn />
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3,1fr)',
        }}
        gap={3}
      >
        {faves ? (
          faves.map((coin) => {
            return (
              <GridItem key={coin.id}>
                <FavesLists coin={coin} />
              </GridItem>
            );
          })
        ) : (
          <Text
            as='p'
            fontSize='2xl'
            letterSpacing={3}
            textTransform='capitalize'
            textAlign='center'
            mt={10}
            color='Highlight'
          >
            there is nothing to show
          </Text>
        )}
      </Grid>
    </Container>
  );
};

export default FavesHomePage;
