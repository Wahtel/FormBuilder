import React from 'react';
import '../../../scss/FormBuilder/addButton.scss';

const AddButton = props => {
  const {onClick} = props;

  return <button onClick={onClick} className="addButton">Add New Field</button>;
};


export default AddButton;