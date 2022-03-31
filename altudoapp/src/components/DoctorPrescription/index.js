import React from 'react';
import { DateField, RichText, Text } from '@sitecore-jss/sitecore-jss-react';

const DoctorPrescription = (props) => (
  <div>
    <p>DoctorPrescription Component</p>
    <h5>
      <RichText field={props.fields.Prescription} />
    </h5>
    <h5>
      <DateField field={props.fields.DateofPrescription} />
    </h5>
  </div>
);

export default DoctorPrescription;
