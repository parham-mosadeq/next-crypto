import Head from 'next/head';

const HeadMaker = ({ homeProp, location }) => {
  return (
    // * Next-js Head component,
    <Head>
      // * Changing the title
      <title>
        {/* homeProp => webApp name */}
        {homeProp} | {location}
        {/* location => where you are. */}
      </title>
    </Head>
  );
};

export default HeadMaker;
