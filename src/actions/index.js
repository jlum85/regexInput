export const FIELD_SELECTED = "FIELD_SELECTED";

export function selectField(field) {
  console.log("selected", field && field.name);

  return {
    type: FIELD_SELECTED,
    payload: field,
  };
}
