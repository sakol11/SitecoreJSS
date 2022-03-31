import React from 'react';
import { Image } from '@sitecore-jss/sitecore-jss-react';

const HeroImage = (props) => (
  <div>
    <h1>image</h1>
    <Image media={props.fields.HeroImage} />
  </div>
);

export default HeroImage;
