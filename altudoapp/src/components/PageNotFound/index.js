import React from 'react';
import { RichText, Text } from '@sitecore-jss/sitecore-jss-react';

const PageNotFound = (props) => (
  <div>
    <h3>
      <Text field={props.fields.Title} />
    </h3>
    <h6>
      <RichText field={props.fields.Description} />
    </h6>
  </div>
);

export default PageNotFound;
