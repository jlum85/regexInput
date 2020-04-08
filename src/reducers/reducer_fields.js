import { data } from "../reducers/data";
import { AT_FIELD } from "../actions/index";

export default function FieldsReducer(state = data, action) {
  console.log(action);
  switch (action.type) {
    case AT_FIELD.READ_ALL:
      return action.payload;
    case AT_FIELD.DELETE:
      return state.filter((item) => {
        console.log("delete item ", item, action.payload);
        if (item.name === action.payload) {
          return false;
        } else {
          return item;
        }
      });
    case AT_FIELD.CREATE:
      return [...state, action.payload];
    default:
      return state;
  }
}
