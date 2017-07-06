import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import '../../../scss/FormBuilder/formBuilderContainer.scss';
import * as FieldsActions from '../../actions/filedsActions';
import AddButton from '../../components/FormBuilder/AddButton';
import FormBuilder from '../../components/FormBuilder/FormBuilder';

@connect(store => {
  return {
    fields: store.fields.fields
  };
})

class FormBuilderContainer extends Component {
  constructor(props) {
    super(props);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.addNewField = this.addNewField.bind(this);
    this.removeField = this.removeField.bind(this);
  }

  onChangeHandler(e, id) {
    let {value, type, checked} = e.target;
    const name = e.target.name;
    value = type === 'checkbox' ? checked : value;

    if (value === 'checkbox') {
      this.props.dispatch(FieldsActions.setDefaultValue(value, id));
    } else {
      this.props.dispatch(FieldsActions.setFieldValue(name, value, id));
    }
  }

  addNewField() {
    this.props.dispatch(FieldsActions.addNewField());
  }

  removeField(id) {
    this.props.dispatch(FieldsActions.removeField(id));
  }

  render() {
    const {fields} = this.props;

    return(
      <div className="formBuilderContainer">
        <FormBuilder removeField={this.removeField}
                     fields={fields}
                     onChangeHandler={this.onChangeHandler}/>
        <div className="formBuilderButtons">
          <AddButton onClick={this.addNewField} />
          {fields.length ? <Link to='form'>Create Form</Link> : null}
        </div>
      </div>
    );
  }
}


export default FormBuilderContainer;