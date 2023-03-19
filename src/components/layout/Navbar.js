import Link from 'next/link';
import {
  Container,
  Box,
  ListItem,
  List,
  Heading,
  Stack,
  Divider,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMenu } from '../redux/general/generalSlice';
import useWidth from '@/helpers/useWidth';
import { useEffect } from 'react';

const Navbar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.generalState.isOpen);
  const startWidth = useSelector((state) => state.generalState.innerWidth);

  const [initWidth] = useWidth(startWidth);

  // * Tablet and smaller devices
  // ! MOBILE
  if (initWidth <= 768) {
    return (
      <Container
        maxW='container.md'
        py={2}
        bg='blue.300'
        display='flex'
        alignContent='center'
        justifyContent='space-around'
        position='relative'
      >
        <Heading
          as='h2'
          fontWeight='bold'
          fontSize={15}
          flexShrink={1}
          color='blackAlpha.500'
        >
          <Link href='/'>Coin market</Link>
        </Heading>
        <List
          display='flex'
          alignItems='center'
          justifyContent='space-around'
          color='ButtonShadow'
          width='container.lg'
        >
          {isOpen ? (
            <Box
              zIndex={101}
              width='36'
              minH='container.xl'
              position='absolute'
              top={0}
              right={0}
              bg='blue.500'
              transition='ease-out'
            >
              <Divider my={14} />
              <Stack
                zIndex={100}
                textAlign='center '
                textTransform='capitalize '
                letterSpacing={2}
              >
                <ListItem>
                  <Link href='/'>home</Link>
                </ListItem>
                <ListItem>
                  <Link href='/faves'>faves</Link>
                </ListItem>
                <ListItem>
                  <Link href='/exchanges'>exchanges</Link>
                </ListItem>
              </Stack>
              <CloseIcon
                fontSize={17}
                cursor='pointer'
                position='absolute'
                top='5'
                right='5'
                onClick={() => dispatch(toggleMenu())}
              />
            </Box>
          ) : (
            <HamburgerIcon
              fontSize={19}
              cursor='pointer'
              position='absolute'
              bottom='5'
              right='5'
              onClick={() => dispatch(toggleMenu())}
            />
          )}
        </List>
      </Container>
    );
  }
  // * Desktop width
  // ! DESKTOP
  if (initWidth >= 769) {
    return (
      <>
        <Container
          minW='full'
          height='14'
          py={2}
          bg='blue.300'
          display='flex'
          alignContent='center'
          justifyContent='center'
        >
          <Box
            as='div'
            maxW={{
              base: 'container.md',
              md: 'container.md',
              lg: 'container.lg',
              xl: 'container.xg',
            }}
            display='flex'
            justifyContent='space-between'
            alignItems='center'
          >
            <Heading
              as='h2'
              fontWeight='bold'
              fontSize={15}
              color='blackAlpha.500'
              flexShrink={1}
              width='full'
            >
              <Link href='/'>Coin market</Link>
            </Heading>
            <List
              flexGrow={1}
              display='flex'
              alignItems='center'
              justifyContent='space-evenly'
              color='ButtonShadow'
              width='container.lg'
              flexWrap='nowrap'
            >
              <ListItem
                textTransform='capitalize'
                letterSpacing={2}
                lineHeight={0}
              >
                <Link href='/'>home</Link>
              </ListItem>
              <ListItem
                textTransform='capitalize'
                letterSpacing={2}
                lineHeight={0}
              >
                <Link href='/faves'>faves</Link>
              </ListItem>
              <ListItem
                textTransform='capitalize'
                letterSpacing={2}
                lineHeight={0}
              >
                <Link href='/exchanges'>exchanges</Link>
              </ListItem>
            </List>
          </Box>
        </Container>
      </>
    );
  }
};

export default Navbar;
