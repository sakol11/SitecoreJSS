import React from 'react';
import { DateField, RichText, Text } from '@sitecore-jss/sitecore-jss-react';

const PatientRecords = (props) => {
  const patientRecordsList = props.fields.Records;
  return (
    <div>
      <p>PatientRecords Component</p>
      {patientRecordsList &&
        patientRecordsList.map((listItem, index) => (
          <div key={`patientrecordlistitem-${index}`}>
            <p>
              Prescription: <RichText field={listItem.fields.Prescription} />
            </p>
            {/* <p>
              Date: <DateField field={listItem.fields.DateofPrescription} />
            </p> */}
          </div>
        ))}
    </div>
  );
};

export default PatientRecords;
