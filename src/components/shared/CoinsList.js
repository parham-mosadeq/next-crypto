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
  useToast,
} from '@chakra-ui/react';

import { useDispatch } from 'react-redux';
import { addToFaves } from '../redux/faves/faveSlice';
import Link from 'next/link';

const CoinsList = ({ coin }) => {
  const dispatch = useDispatch();
  const toast = useToast();
  return (
    <Box as='article'>
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
            onClick={() => {
              dispatch(addToFaves(coin));
              toast({
                title: coin.name,
                description: 'Added to your faves',
                status: 'success',
                duration: 900,
                isClosable: true,
                variant: 'left-accent',
              });
            }}
            textTransform='capitalize'
            mr={1}
            colorScheme='green'
          >
            add to fave
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
