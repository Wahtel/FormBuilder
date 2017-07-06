export const ADD_NEW_FIELD = 'ADD_NEW_FIELD';
export const REMOVE_FIELD = 'REMOVE_FIELD';
export const SET_FIELD_VALUE = 'SET_FIELD_VALUE';
export const SET_DEFAULT_VALUE = 'SET_DEFAULT_VALUE';


export function setFieldValue(fieldName, defaultValue, id) {
  return {
    type: SET_FIELD_VALUE,
    payload: {
      fieldName,
      defaultValue,
      id
    }
  };
}


export function setDefaultValue(fieldType, id) {
  return {
    type: SET_DEFAULT_VALUE,
    payload: {
      fieldType,
      id
    }
  };
}

export function addNewField() {
  return {type: ADD_NEW_FIELD};
}

export function removeField(id) {
  return {type: REMOVE_FIELD, payload: id};
}