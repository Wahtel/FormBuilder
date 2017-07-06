import React from 'react';
import '../../../scss/FormBuilder/builderField.scss';

const BuilderField = props => {
  return <div className="builderFieldContainer">{props.children}</div>;
};

export default BuilderField;