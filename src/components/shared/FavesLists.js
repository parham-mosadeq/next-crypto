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
  Box,
} from '@chakra-ui/react';

import { useDispatch } from 'react-redux';
import { removeFave } from '../redux/faves/faveSlice';
import Link from 'next/link';

const CoinsList = ({ coin }) => {
  const dispatch = useDispatch();
  return (
    <Box as='article'>
      <Card align='center' my={3} rounded='lg'>
        <CardHeader>
          <Heading
            letterSpacing={2}
            size='md'
            fontSize={18}
            color='facebook.700'
          >
            {' '}
            {coin.name}
          </Heading>
        </CardHeader>
        <Divider />
        <CardBody maxW='full' display='block' mx='auto' p={0}>
          <Image src={coin.image} width={220} height={220} my={3} />
        </CardBody>
        <CardFooter>
          <Button
            onClick={() => dispatch(removeFave(coin))}
            textTransform='capitalize'
            mr={1}
            colorScheme='red'
          >
            remove
          </Button>
          <Button textTransform='capitalize' ml={1} colorScheme='blue'>
            <Link href={`/details/${coin.id}`}>view details</Link>
          </Button>
        </CardFooter>
      </Card>
    </Box>
  );
};

export default CoinsList;
