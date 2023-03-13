import BackBtn from '@/components/shared/BackBtn';
import { Box, Container, Grid, GridItem, Image, Text } from '@chakra-ui/react';
import { fetchExchange } from '@/helpers/api-utils';
const ExchangeId = ({ exchange }) => {
  const {
    name,
    country,
    image,
    trade_volume_24h_btc,
    trust_score_rank,
    url,
    year_established,
  } = exchange;
  return (
    <Container maxW='container.lg' minH='container.lg'>
      <BackBtn />

      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
        }}
        gap={3}
        mt={10}
        alignContent='center'
      >
        <GridItem
          width='28'
          alignSelf='center'
          justifySelf={{ base: 'center', md: 'left' }}
        >
          <Image src={image} alt={name} width={200} height={120} />
        </GridItem>
        <GridItem
          rounded='3xl'
          bg='blue.600'
          width={{ base: 'full' }}
          mx='auto'
          textAlign={{ base: 'center', md: 'left' }}
        >
          <Box as='div'>
            <Box position='relative'>
              <Text
                as='p'
                color='white'
                p={2}
                textTransform='capitalize'
                fontSize={20}
              >
                name: {name}
              </Text>
              <Text
                color='white'
                bg='whatsapp.600'
                width={10}
                height={10}
                fontSize={20}
                mr={4}
                rounded='full'
                position='absolute'
                textAlign='center'
                top={-4}
                right={0}
              >
                {trust_score_rank}
              </Text>
            </Box>
            <Text
              as='p'
              color='white'
              p={2}
              textTransform='capitalize'
              fontSize={18}
            >
              country:{country}
            </Text>
            <Text
              as='p'
              color='white'
              p={2}
              textTransform='capitalize'
              fontSize={18}
            >
              year established: {year_established} -
            </Text>
          </Box>

          <Box
            as='p'
            color='white'
            p={2}
            textTransform='capitalize'
            fontSize={18}
            textAlign='left'
          >
            <Text as='a' href={url} target='_blank'>
              {name} - website
            </Text>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default ExchangeId;

export async function getServerSideProps(context) {
  const loc = context.query.exchangeID;
  const exchange = await fetchExchange(loc);
  return {
    props: {
      exchange,
    },
  };
}
