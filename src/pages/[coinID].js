import {
  Box,
  Container,
  Grid,
  GridItem,
  Text,
  Heading,
  Divider,
  Spinner,
  Button,
} from '@chakra-ui/react';
import { fetchCoin } from '@/helpers/api-utils';
import Image from 'next/image';
import HeadMaker from '@/components/shared/HeadMaker';
import Link from 'next/link';
import sanitizeHtml from 'sanitize-html';
import BackBtn from '@/components/shared/BackBtn';

const CoinId = ({ coin }) => {
  if (!coin) {
    return (
      <>
        <Spinner color='red.500' />
        <Button>
          <Link href={`/${coin.name}`}>refresh</Link>
        </Button>
      </>
    );
  }

  const {
    name,
    coingecko_rank,
    last_updated,
    market_cap_rank,
    image: { large },
    description: { en },
    genesis_date,
    symbol,
    market_data: {
      current_price: { usd },
    },
  } = coin;

  return (
    <Container maxW='container.lg' minH='container.sm'>
      <HeadMaker
        homeProp='Coin Market'
        location={name}
        metaName={name + `page`}
        metaDesc={name + 'details page'}
      />
      <BackBtn />
      <Grid
        maxH='full'
        justifyItems='center'
        textAlign='center'
        alignContent='center'
      >
        <GridItem
          templateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3,1fr)',
          }}
          gap={3}
        >
          <Box as='div' my={5}>
            <Heading mb={1} size={{ base: '3xl', md: 'xl' }}>
              {name}
            </Heading>
            <Divider />

            <Box display='flex' justifyContent='center' my={4}>
              <Image src={large} width={220} height={220} />
            </Box>

            <Divider orientation='vertical' />

            {/*  information start */}
            <Box as='div' textTransform='capitalize'>
              <Text
                as='p'
                mx='auto'
                maxW='fit-content'
                fontSize={20}
                fontWeight='medium'
                my={4}
              >
                {name}'s rank: {coingecko_rank}
              </Text>
              <Text>genesis_date: {Date(genesis_date)}</Text>
              <Text
                as='p'
                my={4}
                mx='auto'
                maxW='fit-content'
                fontWeight='semibold'
                fontSize={16}
              >
                market cap rank: {market_cap_rank}
              </Text>

              <Text
                as='p'
                my={4}
                mx='auto'
                maxW='fit-content'
                fontWeight='semibold'
                fontSize={16}
              >
                current price: {usd.toLocaleString()}$
              </Text>

              {/* desc */}

              {/* update date */}
              <Text
                as='p'
                my={4}
                mx='auto'
                maxW='fit-content'
                fontWeight='semibold'
                fontSize={14}
              >
                last update: {Date(last_updated)}
              </Text>
            </Box>
            {/*  information end */}
          </Box>

          <Box as='div' my={4}>
            <p dangerouslySetInnerHTML={{ __html: sanitizeHtml(en) }}></p>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
};

export async function getServerSideProps(context) {
  const coinId = context.params.coinID;
  const coin = await fetchCoin(coinId);

  return {
    props: {
      coin,
    },
  };
}

export default CoinId;
