export const AT_FIELD = {
  DELETE: "DELETE_FIELD",
  CREATE: "CREATE_FIELD",
  READ: "READ_FIELD",
  READ_ALL: "READ_ALL",
  ERROR: "ERROR",
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
