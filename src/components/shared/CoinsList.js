import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Text,
  CardFooter,
  Heading,
  Button,
} from '@chakra-ui/react';
const CoinsList = ({ coins }) => {
  const [startPoint, setStartPoint] = useState(0);
  const [coinPerPage, setCoinPerPage] = useState(10);
  // console.log(coins);

  return (
    <article>
      {coins.map((coin) => {
        // console.log(coin);
        return (
          <>
            <Card align='center'>
              <CardHeader>
                <Heading size='md'> {coin.name}</Heading>
              </CardHeader>
              <CardBody>
                <Text></Text>
              </CardBody>
              <CardFooter>
                <Button colorScheme='blue'>add to fave</Button>
              </CardFooter>
            </Card>
          </>
        );
      })}
    </article>
  );
};

export default CoinsList;
