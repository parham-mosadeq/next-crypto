import Footer from '@/components/layout/Footer';
import NavLink from '@/components/layout/Navbar';
import { ChakraProvider, Container } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { store } from '../components/redux/rootReducer';
export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Chakra start */}
      <Provider store={store}>
        <ChakraProvider>
          {/* Navbar start */}
          <NavLink />
          {/* Navbar end */}
          <Container maxW={'container.lg'} maxH='full'>
            <Component {...pageProps} />
            {/* Footer start */}
            <Footer />
            {/* Footer end */}
          </Container>
        </ChakraProvider>
        {/* Chakra end */}
      </Provider>
    </>
  );
}
