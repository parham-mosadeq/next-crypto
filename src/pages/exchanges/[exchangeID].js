import BackBtn from '@/components/shared/BackBtn';
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Container,
  Grid,
  GridItem,
  Image,
  Text,
} from '@chakra-ui/react';
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
      <Card>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
          gap={3}
          mt={10}
          alignContent='center'
        >
          <CardHeader>
            <GridItem
              width='98'
              height='56'
              alignSelf='center'
              justifySelf={{ base: 'center', md: 'left' }}
            >
              <Image src={image} alt={name} width='full' height='full' />
            </GridItem>

            <Text
              color='black'
              bg={trust_score_rank <= 9 ? 'whatsapp.500' : 'red.500'}
              width={10}
              height={10}
              fontSize={20}
              mr={4}
              rounded='full'
              position='absolute'
              textAlign='center'
              top={-4}
              right={-5}
            >
              {trust_score_rank}
            </Text>
          </CardHeader>

          <CardBody>
            <GridItem
              rounded='3xl'
              width={{ base: 'full' }}
              mx='auto'
              textAlign={{ base: 'center', md: 'left' }}
            >
              <Box as='div'>
                <Box position='relative'>
                  <Text
                    as='p'
                    color='black'
                    p={2}
                    textTransform='capitalize'
                    fontSize={20}
                  >
                    name: {name}
                  </Text>
                </Box>
                <Text
                  as='p'
                  color='black'
                  p={2}
                  textTransform='capitalize'
                  fontSize={18}
                >
                  country:{country}
                </Text>
                <Text
                  as='p'
                  color='black'
                  p={2}
                  textTransform='capitalize'
                  fontSize={18}
                >
                  year established: {year_established} -
                </Text>
              </Box>

              <Box
                as='p'
                color='black'
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
          </CardBody>
        </Grid>
      </Card>
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
