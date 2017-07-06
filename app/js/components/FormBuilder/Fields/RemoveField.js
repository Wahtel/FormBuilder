import React from 'react';
import BuilderField from '../BuilderField';
import '../../../../scss/FormBuilder/fields/removeField.scss';


const RemoveField = props => {
  const {removeField, fieldId} = props;

  return (
    <BuilderField>
      <a onClick={() => removeField(fieldId)} className="removeField">Remove Field</a>
    </BuilderField>
  );
};


export default RemoveField;