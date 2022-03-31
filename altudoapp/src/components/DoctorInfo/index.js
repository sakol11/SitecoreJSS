import React from 'react';
import { Text, getFieldValue } from '@sitecore-jss/sitecore-jss-react';

const DoctorInfo = (props) => {
  const fieldValue = getFieldValue(props.fields, 'Experience');
  return (
    <div>
      <p>DoctorInfo Component</p>
      <h3>
        <Text field={props.fields.DoctorName} />
      </h3>
      <h3>
        <Text field={props.fields.Qualification} />
      </h3>
      <h3>
        <Text field={props.fields.Speciality} />
      </h3>
      <h3> {fieldValue} </h3>
    </div>
  );
};

export default DoctorInfo;
