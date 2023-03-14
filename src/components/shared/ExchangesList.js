import {
  Card,
  CardHeader,
  CardBody,
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

const ExchangeList = ({ exchange }) => {
  const dispatch = useDispatch();
  const toast = useToast();
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
            {exchange.name}
          </Heading>
        </CardHeader>
        <Divider />
        <CardBody maxW='full' display='block' mx='auto' p={0}>
          <Image
            src={exchange.image}
            width={120}
            height={120}
            my={3}
            borderRadius='full'
          />
        </CardBody>
        <CardFooter>
          <Button
            onClick={() => {
              dispatch(addToFaves(exchange));
              toast({
                title: exchange.name,
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
            add to faves
          </Button>
          <Button textTransform='capitalize' ml={1} colorScheme='blue'>
            <Link href={`/exchanges/${exchange.id}`}>view details</Link>
          </Button>
        </CardFooter>
      </Card>
    </Box>
  );
};

export default ExchangeList;
