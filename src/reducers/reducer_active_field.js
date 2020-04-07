import { FIELD_SELECTED } from "../actions";
import { data } from "../reducers/reducer_fields";

const initialState = null;

export default function (state = initialState, action) {
  switch (action.type) {
    case FIELD_SELECTED:
      return action.payload;
    default:
      return state;
  }
}
