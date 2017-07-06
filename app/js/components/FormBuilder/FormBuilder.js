import React from 'react';
import '../../../scss/FormBuilder/formBuilder.scss';
import RemoveField from './Fields/RemoveField';
import DefaultFields from './Fields/DefaultFields';
import TextFields from './Fields/TextFields';
import CheckBoxFields from './Fields/CheckBoxFields';

const FormBuilder = props => {
  const {onChangeHandler, removeField, fields} = props;

  const renderTextFields = (field, id) => {
    return <TextFields onChangeHandler={onChangeHandler} field={field} fieldId={id} />;
  };

  const renderCheckBoxFields = (field, id) => {
    return(
      <CheckBoxFields  onChangeHandler={onChangeHandler} field={field} fieldId={id} />
    );
  };

  return(
    <div>
      {fields.map((field, id) => {
        return(
          <div className="formBuilder" key={id}>
            <DefaultFields onChangeHandler={onChangeHandler} field={field} fieldId={id} />
            {field.type === 'checkbox' ? renderCheckBoxFields(field, id) : renderTextFields(field, id)}
            <RemoveField fieldId={id} removeField={removeField} />
          </div>
        );
      })}
    </div>
  );
};

export default FormBuilder;