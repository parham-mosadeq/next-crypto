import Head from 'next/head';
import styles from '../../styles/HeadMaker.module.css';
const HeadMaker = ({ homeProp, location, metaName, metaDesc }) => {
  return (
    // * Next-js Head component,
    <Head>
      // * Changing the title
      <title>
        {homeProp} | {location}
      </title>
      <meta name={metaName} description={metaDesc} />
    </Head>
  );
};

export default HeadMaker;
