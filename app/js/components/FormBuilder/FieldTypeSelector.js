import React from 'react';
import classnames from 'classnames';

const FieldTypeSelector = props => {
  const {onChange, className, fieldId} = props;
  const classes = classnames({
    [className]: className
  });

  return(
    <select onChange={(e) => onChange(e, fieldId)} defaultValue='Text Field' name="type" className={classes}>
      <option value='text'>Text field</option>
      <option value='password'>Password field</option>
      <option value='checkbox'>CheckBox field</option>
    </select>
  );
};

export default FieldTypeSelector;