import React, {Component} from 'react';
import {connect} from 'react-redux';
import Form from '../../components/Form/Form';

@connect(store => {
  return {
    fields: store.fields.fields
  };
})

class FormContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {fields} = this.props;

    return <Form fields={fields} />;
  }
}


export default FormContainer;