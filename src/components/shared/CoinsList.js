import {
  Card,
  CardHeader,
  CardBody,
  Text,
  CardFooter,
  Heading,
  Button,
  Image,
  Divider,
} from '@chakra-ui/react';
import { m } from 'framer-motion';
const CoinsList = ({ coin }) => {
  return (
    <article>
      <>
        <Card align='center'>
          <CardHeader>
            <Heading letterSpacing={2} size='md'>
              {' '}
              {coin.name}
            </Heading>
          </CardHeader>
          <Divider />
          <CardBody>
            <Text>
              <Image src={coin.image} width={120} height={120} />
            </Text>
          </CardBody>
          <CardFooter>
            <Button mr={1} colorScheme='blue'>
              add to fave
            </Button>
            <Button ml={1} colorScheme='blue'>
              visit coin
            </Button>
          </CardFooter>
        </Card>
      </>
    </article>
  );
};

export default CoinsList;
