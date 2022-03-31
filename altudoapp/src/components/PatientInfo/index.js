import React from 'react';
import { Text, DateField } from '@sitecore-jss/sitecore-jss-react';

const PatientInfo = (props) => (
  <div>
    <h1>Patient Details</h1>
    <h3>
      <Text field={props.fields.patientName} />
    </h3>
    <h3>
      <Text field={props.fields.patientGender} />
    </h3>
    {/* <h3>
      <DateField field={props.fields.patientDob} />
    </h3>
    <h3>
      <Text field={props.fields.patientNo} />
    </h3>
    <h3>
      <Text field={props.fields.patientPhNo} />
    </h3> */}
  </div>
);

export default PatientInfo;
