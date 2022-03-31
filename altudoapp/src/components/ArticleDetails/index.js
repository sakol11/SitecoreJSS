import React from 'react';
import { Text, RichText } from '@sitecore-jss/sitecore-jss-react';

const ArticleDetails = ({ fields, displayname }) => (
  <div>
    <h5>displayname</h5>
    <p>ArticleDetails Component</p>
    <h1>
      <Text field={fields.heading} />
    </h1>
    <p>
      <Text field={fields.ShortDescription} />
    </p>
    <p>
      <RichText field={fields.DetailedBlog} />
    </p>
  </div>
);

export default ArticleDetails;
