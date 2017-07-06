import React from 'react';
import BuilderField from '../BuilderField';

const CheckBoxFields = props => {
  const {onChangeHandler, field, fieldId} = props;

  return(
    <BuilderField>
      <span className="text">Is checked:</span>
      <input onChange={(e) => onChangeHandler(e, fieldId)}
             className="field"
             name="defaultChecked"
             type="checkbox"
             checked={field.defaultChecked}
      />
    </BuilderField>
  );
};

export default CheckBoxFields;