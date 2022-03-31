// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the DoctorInfo component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function (manifest) {
  manifest.addComponent({
    name: 'DoctorInfo',
    icon: SitecoreIcon.DocumentTag,
    fields: [{ name: 'DoctorName', type: CommonFieldTypes.SingleLineText },
    { name: 'Qualification', type: CommonFieldTypes.SingleLineText },
    { name: 'Speciality', type: CommonFieldTypes.SingleLineText },
    { name: 'Experience', type: CommonFieldTypes.Number }],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}
