import React from 'react';
import { RichText, Text, Image, Link } from '@sitecore-jss/sitecore-jss-react';

const HealthArticle = (props) => {
  const AuthorsList = props.fields.ArticleAuthors;
  return (
    <div>
      <h3>
        <Text field={props.fields.Title} />
      </h3>
      <h6>
        <RichText field={props.fields.Breif} />
      </h6>
      <p>
        <RichText field={props.fields.DetailedArticle} />
      </p>
      <div>
        <Image media={props.fields.ArticleImage} />
      </div>
      {/* <div>
        Link is :{' '}
        <Link field={props.fields.ArticleLink}>
          <em>HTML</em>
        </Link>
      </div> */}

      <div>
        <h4>List of Doctors Available</h4>
        {AuthorsList &&
          AuthorsList.map((listItem, index) => (
            <div key={`DoctorInfoListItem-${index}`}>
              <h5>
                <Link field={listItem.fields.DoctorLink} />
              </h5>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HealthArticle;
