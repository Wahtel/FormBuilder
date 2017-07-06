import React from 'react';
import FormField from './FormField';
import SubmitButton from './SubmitButton';
import '../../../scss/Form/form.scss';

const Form = props => {
  const {fields} = props;

  return(
    <form className="form">
      {fields.map((field, i) => {
        return(
          <div key={i}>
            {field.labelValue.length > 0 ? <label>{field.labelValue}</label> : null}
            <FormField defaultValue={field.defaultValue}
                       defaultChecked={field.defaultChecked}
                       placeholder={field.placeholder}
                       type={field.type}
            />
          </div>
        );
      })}
      <div className="buttonBlock">
        <SubmitButton/>
      </div>
    </form>
  );
};

export default Form;