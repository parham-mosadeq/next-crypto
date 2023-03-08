import NavLink from '@/components/layout/Navbar';
import '@/styles/globals.css';
import { ChakraProvider, Container } from '@chakra-ui/react';

export default function App({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
        <NavLink />
        <Container maxW={'container.lg'} maxH='full'>
          <Component {...pageProps} />
        </Container>
      </ChakraProvider>
    </>
  );
}
