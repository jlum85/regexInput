import { data } from "../reducers/data";
import { AT_FIELD } from "../actions/index";

export default function FieldsReducer(state = data, action) {
  switch (action.type) {
    case AT_FIELD.DELETE:
      return state.filter((item) => {
        if (item.name === action.payload) {
          return false;
        } else {
          return item;
        }
      });
    case AT_FIELD.CREATE:
      return [...state, action.payload];
    case AT_FIELD.UPDATE:
      console.log("AT_FIELD.UPDATE", action.payload);
      return state.map((item) => {
        if (item.name === action.payload.name) {
          return action.payload;
        } else {
          return item;
        }
      });

    default:
      return state;
  }
}
