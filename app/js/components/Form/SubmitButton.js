import React from 'react';
import '../../../scss/Form/submitButton.scss';

const SubmitButton = props => {
  return <button className="submitButton" onClick={(e) => {e.preventDefault()}}>Submit</button>;
};


export default SubmitButton;