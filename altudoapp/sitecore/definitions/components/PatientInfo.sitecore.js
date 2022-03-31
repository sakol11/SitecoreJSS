// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the PatientInfo component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function (manifest) {
  manifest.addComponent({
    name: 'PatientInfo',
    icon: SitecoreIcon.DocumentTag,
    fields: [{ name: 'patientName', type: CommonFieldTypes.SingleLineText },
    { name: 'patientGender', type: CommonFieldTypes.SingleLineText },
    // { name: 'patientDob', type: CommonFieldTypes.Date },
    // { name: 'patientNo', type: CommonFieldTypes.SingleLineText },
    // { name: 'patientPhNo', type: CommonFieldTypes.SingleLineText }
  ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}
