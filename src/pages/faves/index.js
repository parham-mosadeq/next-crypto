import HeadMaker from '@/components/shared/HeadMaker';
import React from 'react';

const FavesHomePage = () => {
  return (
    <div>
      <HeadMaker
        homeProp='Coin Market'
        location='Faves'
        metaName='favorite'
        metaDesc='This page shows users favorite coin/exchanges'
      />
      Faves
    </div>
  );
};

export default FavesHomePage;
