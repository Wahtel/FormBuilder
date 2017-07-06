import {
  ADD_NEW_FIELD,
  REMOVE_FIELD,
  SET_FIELD_VALUE,
  SET_DEFAULT_VALUE
} from '../actions/filedsActions';

const initialState = {
  fields: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_FIELD: {
      const fields = [...state.fields];
      const newField = {
        type: 'text',
        labelValue: '',
        placeholder: '',
        defaultValue: '',
        defaultChecked: false,
      };
      fields.push(newField);

      return {
        ...state,
        fields
      };
    }
    case REMOVE_FIELD: {
      const fields = [...state.fields];
      fields.splice(action.payload, 1);

      return {
        ...state,
        fields
      };
    }
    case SET_FIELD_VALUE: {
      const {fieldName, defaultValue, id} = action.payload;
      const fields = [...state.fields];
      fields[id][fieldName] = defaultValue;

      return {
        ...state,
        fields
      }
    }
    case SET_DEFAULT_VALUE: {
      const {id, fieldType} = action.payload;
      const fields = [...state.fields];
      let defaultField = {
        placeholder: '',
        defaultValue: '',
        defaultChecked: false,
      };
      defaultField.type = fieldType;
      defaultField.labelValue = fields[id].labelValue;
      fields[id] = defaultField;

      return {
        ...state,
        fields
      }
    }
  }

  return state;
}