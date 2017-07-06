import React from 'react';


const FormField = props => {
  const {defaultValue, defaultChecked, placeholder, type} = props;
  const checkFieldProps = (fieldProps) => {

    if (fieldProps.type !== 'checkbox') {
      delete fieldProps.defaultChecked;
    } else {
      fieldProps.className = 'checkBox';
      delete fieldProps.placeholder;
      delete fieldProps.defaultValue;
    }

    return fieldProps;
  };
  let fieldProps = checkFieldProps({type, defaultValue, defaultChecked, placeholder});

  return React.createElement('input', fieldProps);
};


export default FormField;