export const AT_FIELD = {
  DELETE: "DELETE_FIELD",
  CREATE: "CREATE_FIELD",
  UPDATE: "UPDATE_FIELD",
  READ: "READ_FIELD",
};

export function selectField(field) {
  return {
    type: AT_FIELD.READ,
    payload: field,
  };
}

export function deleteField(name) {
  return {
    type: AT_FIELD.DELETE,
    payload: name,
  };
}

export function createField(field) {
  return {
    type: AT_FIELD.CREATE,
    payload: field,
  };
}

export function updateField(field) {
  return {
    type: AT_FIELD.UPDATE,
    payload: field,
  };
}
