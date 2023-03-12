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

import { useDispatch, useSelector } from 'react-redux';
import { addToFaves } from '../redux/faves/faveSlice';
import Link from 'next/link';

const CoinsList = ({ coin }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.faveState.faves);
  console.log(state);
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
            <Button
              onClick={() => dispatch(addToFaves(coin))}
              textTransform='capitalize'
              mr={1}
              colorScheme='blue'
            >
              add to fave
            </Button>
            <Button textTransform='capitalize' ml={1} colorScheme='blue'>
              <Link href={`/details/${coin.id}`}>view details</Link>
            </Button>
          </CardFooter>
        </Card>
      </>
    </article>
  );
};

export default CoinsList;
