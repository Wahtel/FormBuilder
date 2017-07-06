import React from 'react';
import BuilderField from '../BuilderField';

const TextFields = props => {
  const {onChangeHandler, field, fieldId} = props;

  return(
    <div>
      <BuilderField>
        <span className="text">Placeholder:</span>
        <input value={field.placeholder}
               onChange={(e) => onChangeHandler(e, fieldId)}
               className="field"
               name="placeholder"
               type="text"
        />
      </BuilderField>
      <BuilderField>
        <span className="text">Value:</span>
        <input value={field.defaultValue}
               onChange={(e) => onChangeHandler(e, fieldId)}
               className="field"
               name="defaultValue"
               type="text"
        />
      </BuilderField>
    </div>
  );
};


export default TextFields;