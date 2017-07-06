import React from 'react';
import BuilderField from '../BuilderField';
import FieldTypeSelector from '../FieldTypeSelector';

const DefaultFields = props => {
  const {onChangeHandler, field, fieldId} = props;

  return(
    <div>
      <BuilderField>
        <span className="text">Type:</span>
        <FieldTypeSelector fieldId={fieldId} className="field typeSelector" onChange={onChangeHandler} />
      </BuilderField>
      <BuilderField>
        <span className="text">Label:</span>
        <input value={field.labelValue}
               onChange={(e) => onChangeHandler(e, fieldId)}
               className="field"
               name="labelValue"
               type="text"
        />
      </BuilderField>
    </div>
  );
};

export default DefaultFields;