export const FIELD_SELECTED = "FIELD_SELECTED";

export function selectField(field) {
  return {
    type: FIELD_SELECTED,
    payload: field,
  };
}
