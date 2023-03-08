import CoinsList from '@/components/shared/CoinsList';
import { fetchCoins } from '@/helpers/api-utils';
import HeadMaker from '@/components/shared/HeadMaker';
const HomePage = ({ allCoins }) => {
  return (
    <main>
      <HeadMaker homeProp='coin market' location='home' />
      <>
        {/* <CoinsList coins={props.allCoins} /> */}
        {/* {allCoins.map((coin) => {})} */}
      </>
      hello
    </main>
  );
};

export async function getStaticProps(context) {
  // const allCoins = await fetchCoins();

  return {
    props: {
      allCoins: [],
    },
  };
}

export default HomePage;
